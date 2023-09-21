import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Professor } from './professores/professores.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private ApiUrlProf = 'http://localhost:3000/insert/professor';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criarProfessor(professor:Professor){
    return this.http.post(this.ApiUrlProf, professor);
  }
}
