import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ApiUrlLogin = 'http://localhost:3001/signin';
  private ApiUrlsignUp = 'http://localhost:3001/auth/sign-up';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  login(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(this.ApiUrlLogin, data);
  }

  signUp(username: string, email: string, password: string){    
    const data = {username, email, password };
    return this.http.post(this.ApiUrlsignUp, data);
  }

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
