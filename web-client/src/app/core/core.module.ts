import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth/auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthGuardService} from './auth/auth-guard.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ToggleSidebarService} from './toggle-sidebar/toggle-sidebar.service';
import {CrudRestService} from './crud-rest/crud-rest.service';
import {DatatableService} from '../home/shared/datatable/datatable.service';
import {TokenInterceptorService} from './token-interceptor/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuardService,
    ToggleSidebarService,
    CrudRestService,
    DatatableService,
    TokenInterceptorService
  ]
})
export class CoreModule { }
