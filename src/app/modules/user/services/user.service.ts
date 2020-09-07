import { EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { filter, tap, take } from 'rxjs/operators';
import { IUserProfile } from '@utilities/interfaces/user.interface';
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


  private user: ReplaySubject<User> = new ReplaySubject();
  public user$ = this.user.asObservable().pipe(
    // tap(_ => console.log(_))
  );

  private firstLogin$ = this.user$.pipe(
    filter(user => user.profile.firstLogin),
    tap(_ => this.firstLoginPopup())
  );

  public inital(user: User) {
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
