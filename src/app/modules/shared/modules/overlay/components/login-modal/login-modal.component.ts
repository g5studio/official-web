import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { OverlayService } from '@services/overlay.service';

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
    private $overlay: OverlayService
  ) {
    super();
  }

  public form: FormGroup;

  ngOnInit(): void {
    this.inital();
  }

  public login() {
    this.$overlay.closeAll();
  }

  private inital() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', [Validators.required, this.validatePassword]]
    });

    this.form.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      // _ => console.log(this.form.getRawValue())
    );

    this.form.statusChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      // _ => console.log(this.form.get('email').valid)
    );
  }

  private validateEmail(control: AbstractControl): ValidationErrors {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(control.value)
      ? null
      : { invalid: { message: 'User.Page.FirstLogin.ErrorMessages.NotMatchEmailRule' } };
  }

  private validatePassword(control: AbstractControl): ValidationErrors {
    return control.value.length > 5
      ? null
      : { invalid: { message: 'User.Page.FirstLogin.ErrorMessages.NotMatchEmailRule' } };
  }

}
