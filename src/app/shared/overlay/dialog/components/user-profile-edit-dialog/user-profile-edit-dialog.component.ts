import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { UserService } from '@user/services/user.service';
import { EGender } from '@utilities/enums/user.enum';
import { IDialogOptions } from '@utilities/interfaces/overlay.interface';

@Component({
  selector: 'app-user-profile-edit-dialog',
  templateUrl: './user-profile-edit-dialog.component.html',
  styleUrls: ['./user-profile-edit-dialog.component.scss']
})
export class UserProfileEditDialogComponent implements OnInit {

  @Input() options: IDialogOptions;

  constructor(
    private formBuilder: FormBuilder,
    private $user: UserService,
    private $overlay: OverlayService
  ) { }

  public profile: FormGroup;

  get genders() {
    return ["Enums.Gender.Unknow", "Enums.Gender.Male", "Enums.Gender.Female"];
  }

  get gender() {
    return this.profile.get('gender').value
  }

  set gender(value: any) {
    this.profile.get('gender').setValue(value);
  }

  public test = 'test';

  ngOnInit(): void {
    this.initial();
  }

  public getFieldInvalid(field: string) {
    const FIELD = this.profile.get(field)
    return FIELD.invalid && FIELD.touched;
  }

  public submit() {
    this.profile.get('fullName').setValue(`${this.profile.get('firstName').value}${this.profile.get('lastName').value}`);
    this.$overlay.startLoading();
    this.$user.updateUserProfile(this.profile.getRawValue());
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
