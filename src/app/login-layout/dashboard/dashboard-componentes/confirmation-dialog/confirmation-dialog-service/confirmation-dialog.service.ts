import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog.component';
import { MarcarAulaComponent } from '../../marcar-aula/marcar-aula.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(data: object): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: data,
    });
  }

  openReserva(data: Object): void {
    this.dialog.open(MarcarAulaComponent, {
      data: data,
    });
  }
}
