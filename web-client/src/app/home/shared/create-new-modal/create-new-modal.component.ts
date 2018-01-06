import {Component, Inject, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-new-modal',
  templateUrl: './create-new-modal.component.html',
  styleUrls: ['./create-new-modal.component.css']
})
export class CreateNewModalComponent implements OnInit {

  @ViewChild('dialog') dialogTemplateRef: TemplateRef<any>;
  @Input() dialogTitle = 'Dialog Title';

  dialogRef: MatDialogRef<any>;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  onAddClick() {
    this.dialogRef = this.dialog.open(this.dialogTemplateRef, {

    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close();
  }

}

