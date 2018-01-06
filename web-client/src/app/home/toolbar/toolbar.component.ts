import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import Logger from '../../core/logger';
import {Router} from '@angular/router';
import {ToggleSidebarService} from '../../core/toggle-sidebar/toggle-sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
@Injectable()
export class ToolbarComponent implements OnInit {


  constructor(private authService: AuthService,
              private router: Router,
              public toggleSidebarService: ToggleSidebarService) { }

  ngOnInit() {
  }

  onSignOut(): void {
    this.authService.signOut().subscribe(() => {
      Logger.log('The user is logged out');
      this.router.navigate(['/login']);
    });
  }


}
