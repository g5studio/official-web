import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Validator } from '@utilities/helpers/validate.helper';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public $auth: AuthService
  ) { }

  public authentication: FormGroup = this.fb.group({
    email: ["", [Validators.required, this.emailValidator]],
    password: ["", [Validators.required, this.passwordValidator]]
  });

  get rememberMe() { return JSON.parse(localStorage.getItem('rememberMe')); }

  set rememberMe(enable: boolean) {
    localStorage.setItem('rememberMe', JSON.stringify(enable));
  }

  ngOnInit(): void {
  }

  public getErrorMessage(field: string): string {
    const Field = this.authentication.get(field);
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

  private passwordValidator(control: FormControl): ValidationErrors {
    const Validators = new Validator();
    return Validators.validatePassword(control.value) ? null : {
      invalid: {
        message: `Messages.Error.${Validators.getPasswordValidationError(control.value)}`
      }
    };
  }

}
