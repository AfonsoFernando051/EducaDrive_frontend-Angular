import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';

@Component({
  selector: 'app-home-alunos',
  templateUrl: './home-alunos.component.html',
  styleUrls: ['./home-alunos.component.css']
})
export class HomeAlunosComponent {

  constructor(private router: Router, private headerService: HeaderService){
    headerService.headerData = {
      title: 'Professores',
      icon: 'home',
      routeUrl: '/professores'
    }
  }

  navigateToAlunos(): void{
    this.router.navigate(['dashboard/cadastrar-aluno'])
  }
}
