import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SalesComponent} from './sales.component';


const salesRoutes: Routes = [
  {path: '', component: SalesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(salesRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
