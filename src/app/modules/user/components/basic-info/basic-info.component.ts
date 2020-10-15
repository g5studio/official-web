import { IUserProfile } from '@utilities/interfaces/user.interface';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import { User } from '@user/models/user.model';
import { OverlayService } from '@services/overlay.service';
import { IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';
import { EDialogProvider, EMessage } from '@utilities/enums/overlay.enum';
import { MessagePopup } from '@overlay/models/modal.model';
import { error } from 'protractor';
import { EIdentity } from '@utilities/enums/user.enum';
import { Dialog } from '@overlay/models/dialog.model';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit, OnChanges {

  @Input() user: User;
  public isEdit = false;
  public fields: IUserProfile;

  constructor(
    private $fb: FirebaseService,
    private $overlay: OverlayService
  ) { }

  get isStudent() {
    return this.user.profile.identity === EIdentity.Student;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.user.currentValue) {
      this.fields = { ...{}, ...changes.user.currentValue.profile };
    }
  }

  public validator(input: string): boolean {
    return input.length > 0;
  }

  public modifyField(key: string, value: string) {
    this.fields[key] = value;
  }

  public toggleEditDialog() {
    this.$overlay.toggleDialog(new Dialog(EDialogProvider.UserProfileEdit,{
      config: {
        profile: this.user.profile
      }
    }));
  }

  public submit() {
    this.isEdit = false;
    this.$fb.collection('users').update(this.user.profile.uid, this.fields)
      .then(
        res => {
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
}
