import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dados = {email: '', password: ''};

  constructor(private http:HttpClient){}

  enviarFormulario(){
    this.http.post('localhost:8000/login.php', this.dados)
    .subscribe(
      (resposta) => {
        console.log('Resposta do servidor:', resposta);
        
      },
      (erro)=>{
        console.error('Erro ao enviar dados:', erro);

      }
    )

  }
}
