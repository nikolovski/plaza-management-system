import { Component, OnInit } from '@angular/core';
import {LoginFormGroup} from './login-form-group.model';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../core/auth/auth.service';
import {Router} from '@angular/router';
import Logger from '../core/logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new LoginFormGroup();

  constructor(public snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit(): void {
    if(this.loginFormGroup.valid) {
      const email = this.loginFormGroup.get('username').value;
      const password = this.loginFormGroup.get('password').value;
      this.authService.signIn(email, password).subscribe(user => {
          Logger.info('User with email', user.email, 'is logged in');
          Logger.log(user.getIdToken());
          this.router.navigate(['/']);
        },
        error => this.snackBar.open(error, 'Close', {duration: 3000})
      );
    }
  }

  onGoogleSignIn(): void {
    this.authService.googleSignIn().subscribe(credentials => {
      Logger.info('User ',credentials.user.email,'is logged in using Google Authentication');
      this.router.navigate(['/']).then(response => {
        window.location.href = '/';
      });
    });
  }

}
