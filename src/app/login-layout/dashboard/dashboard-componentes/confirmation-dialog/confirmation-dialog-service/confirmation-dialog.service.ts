import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(nome: String, dia: String, horario: String): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: { nome, dia, horario },
    });
  }
}
