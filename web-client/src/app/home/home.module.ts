import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedModule} from './shared/shared.module';
import {
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule
  ],
  declarations: [HomeComponent, SidebarComponent, ToolbarComponent],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule {
}
