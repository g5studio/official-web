import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePopup } from '@overlay/models/modal.model';
import { FirebaseService } from '@services/firebase.service';
import { OverlayService } from '@services/overlay.service';
import { EMessage } from '@utilities/enums/overlay.enum';
import { IDialogOptions, IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';

@Component({
  selector: 'app-user-profile-edit-dialog',
  templateUrl: './user-profile-edit-dialog.component.html',
  styleUrls: ['./user-profile-edit-dialog.component.scss']
})
export class UserProfileEditDialogComponent implements OnInit {

  @Input() options: IDialogOptions;

  constructor(
    private formBuilder: FormBuilder,
    private $fb: FirebaseService,
    private $overlay: OverlayService
  ) { }

  public profile: FormGroup;

  ngOnInit(): void {
    this.initial();
    console.log(this.options.config);
  }

  public getFieldInvalid(field: string) {
    const FIELD = this.profile.get(field)
    return FIELD.invalid && FIELD.touched;
  }

  public submit() {
    this.profile.get('fullName').setValue(`${this.profile.get('firstName').value}${this.profile.get('lastName').value}`);
    this.$overlay.startLoading();
    this.$fb.collection('users').update(this.options.config.profile.uid, this.profile.getRawValue())
      .then(
        res => {
          this.$overlay.closeAll();
          this.$overlay.finishLoading();
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

  private initial() {
    this.profile = this.formBuilder.group({
      nickName: [this.options.config.profile.nickName, [Validators.required]],
      firstName: [this.options.config.profile.firstName, [Validators.required]],
      lastName: [this.options.config.profile.lastName, [Validators.required]],
      fullName: [this.options.config.profile.fullName],
      gender: [this.options.config.profile.gender],
      address: [this.options.config.profile.address],
    })
  }

}
