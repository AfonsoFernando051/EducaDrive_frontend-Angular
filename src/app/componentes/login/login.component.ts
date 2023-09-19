import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
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
        console.log(response);

        if(response){
          window.location.href = '/dashboard'
        }
      },
      (error) => {
        console.log('Erro no login', error);
        
      }
    )

  }
}
