import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatPaginatorModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {CreateNewModalComponent} from './create-new-modal/create-new-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  declarations: [
    DatatableComponent,
    CreateNewModalComponent
  ],
  exports: [
    DatatableComponent,
    CreateNewModalComponent,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule]
})
export class SharedModule { }
