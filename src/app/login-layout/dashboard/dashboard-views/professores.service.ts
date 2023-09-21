import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Professor } from './professores/professores.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private ApiUrlProf = 'http://localhost:3000/insert/professor';
  private ApiUrlProfRead = 'http://localhost:3000/read/read-professores';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  criarProfessor(professor:Professor): Observable<Professor>{
    return this.http.post<Professor>(this.ApiUrlProf, professor);
  }

  getProfessor(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.ApiUrlProfRead)
  }

  readById(id: string): Observable<Professor>{
    const url = `${this.ApiUrlProfRead}/${id}`;
    return this.http.get<Professor>(url);
  }

  update(professor:Professor): Observable<Professor>{
    const url = `${this.ApiUrlProfRead}/${professor.id}`;
    return this.http.put<Professor>(url, professor);
  }

}
