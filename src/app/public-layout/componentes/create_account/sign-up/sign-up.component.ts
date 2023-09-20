import { Component } from '@angular/core';
import { AuthService } from 'src/app/public-layout/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  username:string = '';
  email:string = '';
  password:string = '';
  
  constructor(private authService:AuthService){}

  createAccount(){
    console.log(this.username, this.email, this.password);
    
    this.authService.signUp(this.username, this.email, this.password).subscribe(
      (response) =>{

        alert("Usuário criado com sucesso");
        if(response){
          window.location.href = '/dashboard/dashboard-home'
        }
      },
      (error)=>{
        console.log('Erro no cadastro', error);

      }
    )
  }
}
