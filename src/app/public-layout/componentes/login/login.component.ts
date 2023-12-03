import { Component } from '@angular/core';
import { AuthService } from 'src/app/public-layout/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  password:string = '';

  constructor(private authService:AuthService){}

  enviarFormulario(){    
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if(response.token){
          this.authService.showMessage(response.message)
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            window.location.href = '/dashboard/dashboard-home';
          }, 2000);
        }
      },
      (error) => {
        this.authService.showMessage(error.error)        
      }
    )

  }
}
