import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Modal } from '@overlay/overlay.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { OverlayService } from '@services/overlay.service';
import { FirebaseService } from '@services/firebase.service';
import { AuthService } from 'src/app/auth/auth.service';
import { EMessage } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  providers: []
})
export class LoginModalComponent extends UnsubOndestroy implements OnInit {

  @Input() modal: Modal;

  constructor(
    private formBuilder: FormBuilder,
    private $overlay: OverlayService,
    private $auth: AuthService
  ) {
    super();
  }

  public form: FormGroup;

  ngOnInit(): void {
    this.inital();
  }

  public login() {
    this.$auth.login(this.form.getRawValue()).then(
      _ => this.$overlay.closeAll()
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
      password: ['', [Validators.required]]
    });
  }

  private validateEmail(control: AbstractControl): ValidationErrors {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(control.value)
      ? null
      : { invalid: { message: EMessage.EmailNotMeetRules } };
  }
}
