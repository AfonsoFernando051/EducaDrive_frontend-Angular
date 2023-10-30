import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Alunos } from '../../models/alunos.model';
import { Observable, map, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private ApiUrlAluno = 'http://localhost:3001/insert-aluno';
  private ApiUrlAlunoRead = 'http://localhost:3001/read-alunos';
  private ApiUrlUpdateAluno = 'http://localhost:3001/update-aluno';
  private ApiUrlDeleteAluno = 'http://localhost:3001/delete-aluno';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  criarAluno(aluno:Alunos): Observable<Alunos>{
    return this.http.post<Alunos>(this.ApiUrlAluno, aluno).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any):Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY;
  }

  getAluno(): Observable<Alunos[]>{
    return this.http.get<Alunos[]>(this.ApiUrlAlunoRead)
  }

  readById(id: string): Observable<Alunos>{    
    const url = `${this.ApiUrlAlunoRead}/${id}`;    
    return this.http.get<Alunos>(url);
  }

  update(aluno:Alunos,id: number): Observable<Alunos>{
    console.log(id);
    const url = `${this.ApiUrlUpdateAluno}/${id}`;
    console.log(url);
    console.log(aluno);
    
    return this.http.put<Alunos>(url, aluno).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Alunos>{
    const url = `${this.ApiUrlDeleteAluno}/${id}`;    
    return this.http.delete<Alunos>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
}
}