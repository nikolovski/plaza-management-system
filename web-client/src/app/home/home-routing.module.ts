import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuardService} from '../core/auth/auth-guard.service';

const homeRoutes: Routes = [
{path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
