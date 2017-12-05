import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ToggleSidebarService {

  public open: EventEmitter<boolean>;

  private isOpen: boolean;

  constructor() {
    this.open = new EventEmitter();
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.open.emit(this.isOpen);
  }

}
