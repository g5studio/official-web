import { Component, OnInit, Input } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { OverlayService } from '@services/overlay.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';

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

  ngOnInit(): void {
    this.inital();
  }

  public login() {
    console.log(this.form.get('email').touched)
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
    console.log(this.form.get('email').touched)
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
