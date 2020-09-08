import { Component, OnInit, Input } from '@angular/core';
import { Modal, MessagePopup } from '@overlay/models/modal.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { EUserProvider } from '@utilities/enums/user.enum';
import { IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';
import { EMessage } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-sing-up-modal',
  templateUrl: './sing-up-modal.component.html',
  styleUrls: ['./sing-up-modal.component.scss']
})
export class SingUpModalComponent extends UnsubOndestroy implements OnInit {

  @Input() modal: Modal;

  constructor(
    private formBuilder: FormBuilder,
    private $overlay: OverlayService,
    private $auth: AuthService
  ) {
    super();
  }

  public form: FormGroup;
  get userProvider(): typeof EUserProvider {
    return EUserProvider;
  }

  public authErrorMsg: string;

  ngOnInit(): void {
    this.inital();
  }

  public signUpWithProvider(provider: EUserProvider) {
    this.$auth.signUpWithProvider(provider).then(
      _ => this.$overlay.closeAll()
    ).catch(
      error => this.authErrorMsg = error.message
    );
  }

  public signUpWithEmailaAndPassword() {
    this.$auth.signUpWithEmailAndPassword(this.form.getRawValue())
      .then(_ => {
        this.$overlay.closeAll();
        const MESSAGE_OTIONS: IMessagePopupOptions = {
          alert: false,
          message: EMessage.VerificationLetterSent
        };
        this.$overlay.showPopup(new MessagePopup(MESSAGE_OTIONS));
      })
      .catch(
        error => this.authErrorMsg = error.message
      );
  }

  public getErrorMessage(field: string, error: string) {
    if (this.form.get(field).hasError(error)) {
      return this.form.get(field).getError(error).message;
    }
  }

  private inital() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', [Validators.required, this.validatePassword]]
    });
  }

  private validateEmail(control: AbstractControl): ValidationErrors {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(control.value)
      ? null
      : { invalid: { message: 'Pages.Landing.Error.Email' } };
  }

  private validatePassword(control: AbstractControl): ValidationErrors {
    return /(?=.*[\W_])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}/.test(control.value)
      ? null
      : { invalid: { message: 'Pages.Landing.Error.Password' } };
  }

}
