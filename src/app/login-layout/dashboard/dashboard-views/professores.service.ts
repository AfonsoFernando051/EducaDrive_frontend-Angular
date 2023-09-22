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
  private ApiUrlUpdateProf = 'http://localhost:3000/update/professores';
  private ApiUrlDeleteProf = 'http://localhost:3000/delete/professor';

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

  update(professor:Professor,id: number): Observable<Professor>{
    console.log(id);
    const url = `${this.ApiUrlUpdateProf}/${id}`;
    console.log(url);
    console.log(professor);
    
    return this.http.put<Professor>(url, professor);
  }

  delete(id: string): Observable<Professor>{
    const url = `${this.ApiUrlDeleteProf}/${id}`;    
    return this.http.delete<Professor>(url);
  }

}
