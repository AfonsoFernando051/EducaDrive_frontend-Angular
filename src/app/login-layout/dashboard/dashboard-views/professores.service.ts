import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
