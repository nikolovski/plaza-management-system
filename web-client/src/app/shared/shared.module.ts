import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule

  ],
  declarations: [
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
