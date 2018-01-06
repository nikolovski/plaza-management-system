import {Injectable, OnInit} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';
import Logger from '../logger';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{


  token: string;

  constructor(private authService: AuthService) {
    this.token = this.authService.localAccessToken;
    this.authService.token.subscribe(token => {
      this.token = token;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    Logger.log('Http call intercepted');
    req = req.clone({
      setParams: {
        auth: this.token
      }
    });
    return next.handle(req);
  }

}
