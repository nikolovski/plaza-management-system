import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import Logger from '../logger';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin(url?: string): Observable<boolean> {
    return this.authService.user
      .take(1)
      .map(user => !!user)
      .do(loggedIn => {
          if (!loggedIn) {
            Logger.log('User is not logged in');
            this.router.navigate(['/login']);
          }
        },
        error => Logger.log(error),
        () => Logger.log('canActivate completed')
      )
  };
}
