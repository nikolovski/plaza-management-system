import {EventEmitter, Injectable, Input} from '@angular/core';
import Logger from '../logger';

@Injectable()
export class ToggleSidebarService {

  public open: EventEmitter<boolean>;


  @Input() isOpen: boolean;

  constructor() {
    this.open = new EventEmitter();
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    Logger.log('Sidebar opened:',this.isOpen);
    this.open.emit(this.isOpen);
  }

}
