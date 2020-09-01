import { EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { filter, tap, take } from 'rxjs/operators';
import { IUser } from '@utilities/interfaces/user.interface';
import { ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { OverlayService } from '@services/overlay.service';
import { Modal } from '@overlay/models/modal.model';
import { User } from '@user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $overlay: OverlayService
  ) {
    this.firstLogin$.subscribe();
  }


  private user: ReplaySubject<IUser> = new ReplaySubject();
  public user$ = this.user.asObservable();

  private firstLogin$ = this.user$.pipe(
    filter(user => user.firstLogin),
    tap(_ => this.firstLoginPopup())
  );

  public inital(userProfile: any) {
    this.user.next(new User(userProfile));
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
