import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ApiUrl = 'localhost:8000/login.php';


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(this.ApiUrl, data);
  }
}
