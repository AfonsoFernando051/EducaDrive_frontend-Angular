import { Injectable } from '@angular/core';
import { Reserva } from '../../dashboard-views/models/reserva.model';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {
  private ApiUrlBook = 'http://localhost:3001/book-class';

  constructor(private snackbar: MatSnackBar,private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }
  
  errorHandler(e: any):Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY;
  }

  marcarAula(reserva:Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.ApiUrlBook, reserva).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
