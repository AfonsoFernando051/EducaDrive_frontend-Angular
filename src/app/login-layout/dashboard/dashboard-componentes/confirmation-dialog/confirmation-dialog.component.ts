import { Component, Inject } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog-service/confirmation-dialog.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}
  
  reservar(data: any){
    console.log(data);
  }
  sair(){
    this.dialogRef.close();
  }
}
