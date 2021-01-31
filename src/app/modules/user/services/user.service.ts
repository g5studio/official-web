import { environment } from './../../../../environments/environment';
import { EMessage, EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { filter, tap, take, switchMap, map } from 'rxjs/operators';
import { IUserProfile } from '@utilities/interfaces/user.interface';
import { forkJoin, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { OverlayService } from '@services/overlay.service';
import { MessagePopup, Modal } from '@overlay/overlay.model';
import { User } from '@user/models/user.model';
import { FirebaseService } from '@services/firebase.service';
import { IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $overlay: OverlayService,
    private $fb: FirebaseService
  ) {
    this.firstLogin$.subscribe();
  }


  private user: ReplaySubject<User> = new ReplaySubject();
  public user$ = this.user.asObservable().pipe(
    // tap(_ => console.log(_))
  );

  private firstLogin$ = this.user$.pipe(
    filter(user => user.profile.firstLogin),
    // tap(_ => this.firstLoginPopup())
  );

  public inital(user: User) {
    this.user.next(user);
  }

  public updateUserProfile(profile: IUserProfile) {
    this.user$.pipe(
      take(1)
    ).subscribe(
      user => {
        this.$fb.collection('users').update(user.profile.uid, profile)
          .then(
            res => {
              this.$overlay.finishLoading();
              this.refreshUser();
              this.$overlay.closeAll();
              const MESSAGE_OPTIONS: IMessagePopupOptions = {
                alert: false,
                message: EMessage.ModifiedSuccessfully
              };
              this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
            }
          )
          .catch(
            _ => {
              const MESSAGE_OPTIONS: IMessagePopupOptions = {
                alert: true,
                message: EMessage.ModifiedFailed
              };
              this.$overlay.showPopup(new MessagePopup(MESSAGE_OPTIONS));
            }
          );
      }
    );
  }

  public refreshUser() {
    this.$overlay.startLoading();
    this.user$.pipe(
      take(1),
      switchMap(
        user => forkJoin([
          this.$fb.document('users', user.profile.uid).get().pipe(
            map(res => res.data())
          ),
          this.user$.pipe(take(1))
        ])
      )
    ).subscribe(
      ([profile, user]) => {
        user.refreshUserProfile(profile);
        this.user.next(user);
        this.$overlay.finishLoading();
      }
    );
  }

  private firstLoginPopup() {
    if (!environment.production) {
      this.$overlay.toggleModal(
        new Modal(EModalProvider.Introduction, {
          size: EModalSize.Large,
          hideClose: true
        })
      );
    }
  }


}
