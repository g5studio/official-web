import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import { User } from '@user/models/user.model';
import { OverlayService } from '@services/overlay.service';
import { EDialogProvider } from '@utilities/enums/overlay.enum';
import { EIdentity } from '@utilities/enums/user.enum';
import { Dialog } from '@overlay/overlay.model';
import { ProfileOptions } from '@utilities/abstract/user-profile-options';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent extends ProfileOptions implements OnInit, OnChanges {

  @Input() user: User;

  constructor(
    private $fb: FirebaseService,
    private $overlay: OverlayService
  ) {
    super();
  }

  get isStudent() {
    return this.user.profile.identity === EIdentity.Student;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  public validator(input: string): boolean {
    return input.length > 0;
  }

  public toggleEditDialog(event: MouseEvent) {
    this.$overlay.toggleDialog(new Dialog(EDialogProvider.UserProfileEdit, {
      config: {
        profile: this.user.profile
      }
    }),
      event
    );
  }
}
