import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../../professores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-professores',
  templateUrl: './cadastro-professores.component.html',
  styleUrls: ['./cadastro-professores.component.css']
})
export class CadastroProfessoresComponent implements OnInit{

  constructor(private professorService: ProfessoresService, private router: Router){}

  ngOnInit(): void {
  }

  criarProfessor(){
    this.professorService.showMessage("Operação executada com sucesso!");
  }
  cancel(){
    this.router.navigate(['dashboard/dashboard-home/professores/cadastro-professores']);
  }
}
