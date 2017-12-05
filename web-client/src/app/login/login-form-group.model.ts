import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Injectable()
export class LoginFormGroup extends FormGroup {

  constructor() {
    super({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      password: new FormControl('', Validators.required)
    })
  }

}
