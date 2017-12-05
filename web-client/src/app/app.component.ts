import {Component} from '@angular/core';
import {AuthService} from './core/auth/auth.service';
import Logger from './core/logger';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'app works!';
  constructor(private authService: AuthService,
              private router: Router){
  }

  onLogout() {
    this.authService.signOut().subscribe(response => {
      Logger.info("User with email", response,'logged out');
      this.router.navigate(['/login']);
    });
  }
}
