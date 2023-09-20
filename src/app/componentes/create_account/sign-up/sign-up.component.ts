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
    console.log(this.username, this.email, this.password);
    
    this.authService.signUp(this.username, this.email, this.password).subscribe(
      (response) =>{

        alert("Usuário criado com sucesso");
      },
      (error)=>{
        console.log('Erro no cadastro', error);

      }
    )
  }
}
