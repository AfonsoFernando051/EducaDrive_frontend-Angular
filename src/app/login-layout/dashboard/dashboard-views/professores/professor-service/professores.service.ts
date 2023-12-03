import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Professor } from '../../models/professores.model';
import { Observable, map, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private ApiUrlProf = 'http://localhost:3001/insert-professor';
  private ApiUrlProfRead = 'http://localhost:3001/read-professores';
  private ApiUrlUpdateProf = 'http://localhost:3001/update-professor';
  private ApiUrlDeleteProf = 'http://localhost:3001/delete-professor';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  criarProfessor(professor:Professor): Observable<Professor>{
    return this.http.post<Professor>(this.ApiUrlProf, professor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any):Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY;
  }

  getProfessor(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.ApiUrlProfRead)
  }

  readById(id: string): Observable<Professor[]>{    
    const url = `${this.ApiUrlProfRead}/${id}`;    
    return this.http.get<Professor[]>(url);
  }

  update(professor:Professor,id: number): Observable<Professor>{
    const url = `${this.ApiUrlUpdateProf}/${id}`;
    
    return this.http.put<Professor>(url, professor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: Number): Observable<Professor>{
    const url = `${this.ApiUrlDeleteProf}/${id}`;    
    return this.http.delete<Professor>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

}
