import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ApiUrlLogin = 'http://localhost:3000/auth/login';
  private ApiUrlsignUp = 'http://localhost:3000/auth/sign-up';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(this.ApiUrlLogin, data);
  }

  signUp(username: string, email: string, password: string){    
    const data = {username, email, password };
    return this.http.post(this.ApiUrlsignUp, data);
  }
}
