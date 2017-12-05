import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth/auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthGuardService} from './auth/auth-guard.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [AuthService, AuthGuardService]
})
export class CoreModule { }
