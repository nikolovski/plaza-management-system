import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedModule} from './shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, SidebarComponent, ToolbarComponent],
  exports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
