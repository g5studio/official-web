import { EModalProvider, EModalSize } from './../../../utilities/enums/overlay.enum';
import { filter, tap, take } from 'rxjs/operators';
import { IUser } from '@utilities/interfaces/user.interface';
import { ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { OverlayService } from './overlay.service';
import { Modal } from '../modules/overlay/models/modal.model';
import { FirebaseService } from './firebase.service';

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


  private user: ReplaySubject<IUser> = new ReplaySubject();
  public user$ = this.user.asObservable();

  private firstLogin$ = this.user$.pipe(
    filter(user => user.firstLogin),
    tap(_ => this.firstLoginPopup())
  );

  public inital(user: any) {
    this.user.next(user);
  }

  private firstLoginPopup() {
    this.$overlay.toggleModal(
      new Modal(EModalProvider.Introduction, {
        size: EModalSize.Large,
        hideClose: true
      })
    );
  }

}
