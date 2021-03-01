import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Validator } from '@utilities/helpers/validate.helper';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private $auth: AuthService
  ) { }

  public form = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, this.emailValidator]],
    password: ["", [Validators.required, this.passwordValidator]],
    confirmPassword: ["", [Validators.required, this.confirmPasswordValidator.bind(this)]]
  });

  ngOnInit(): void {
  }

  public signUpAndLogin() {
    const Form = this.form.getRawValue()
    this.$auth.signUpWithEmailAndPassword({
      email: Form.email,
      password: Form.password
    });
  }

  public getErrorMessage(field: string): string {
    const Field = this.form.get(field);
    return Field.hasError("required") ? "Messages.Error.FieldRequired" :
      Field.getError("invalid").message;
  }

  private emailValidator(control: FormControl): ValidationErrors {
    const Validators = new Validator();
    return Validators.validateEmail(control.value) ? null : {
      invalid: {
        message: "Messages.Error.Email"
      }
    };
  }

  private confirmPasswordValidator(control: FormControl): ValidationErrors {
    if (this.form) {
      return control.value === this.form.get('password').value ? null : {
        invalid: {
          message: `Messages.Error.NotEqualNewPassword`
        }
      }
    } else {
      return null
    }

  }

  private passwordValidator(control: FormControl): ValidationErrors {
    const Validators = new Validator();
    return Validators.validatePassword(control.value) ? null : {
      invalid: {
        message: `Messages.Error.${Validators.getPasswordValidationError(control.value)}`
      }
    };
  }

}
