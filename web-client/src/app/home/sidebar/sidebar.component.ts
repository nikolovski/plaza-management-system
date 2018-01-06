import {Component, HostListener, Injectable, OnInit, ViewChild} from '@angular/core';
import {ToggleSidebarService} from '../../core/toggle-sidebar/toggle-sidebar.service';
import {MatSidenav} from '@angular/material';
import Logger from '../../core/logger';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
@Injectable()
export class SidebarComponent implements OnInit {

  isOpen: boolean;
  @ViewChild('sidenav') sidenav: any;

  constructor(private toggleSidebarService: ToggleSidebarService) {
  }

  ngOnInit() {
    this.toggleSidebarService.open.subscribe(open =>
      this.isOpen = open);
  }
  onContentClick(event:Event) {
    event.stopPropagation();
    if(this.isOpen){
      this.toggleSidebarService.toggle();
    }

  }

}
