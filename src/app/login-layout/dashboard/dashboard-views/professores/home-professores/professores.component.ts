import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  constructor(private router: Router, private headerService: HeaderService){
    headerService.headerData = {
      title: 'Professores',
      icon: 'home',
      routeUrl: '/professores'
    }
  }

  ngOnInit(): void {
    
  }

  navigateToProfessores(): void{
    this.router.navigate(['dashboard/professores/cadastro-professores'])
  }
}
