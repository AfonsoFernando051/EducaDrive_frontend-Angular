import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

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
    this.authService.signUp(this.username, this.email, this.password).subscribe(
      (response) =>{
        console.log("resposta");
        
      },
      (error)=>{
        console.log('Erro no cadastro', error);

      }
    )
  }
}
