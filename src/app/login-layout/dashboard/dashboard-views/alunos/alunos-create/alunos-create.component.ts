import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos-service/alunos.service';
import { Router } from '@angular/router';
import { Alunos } from '../../models/alunos.model';
import { HeaderService } from '../../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';
import { ProfessoresService } from '../../professores/professor-service/professores.service';
import { Professor } from '../../models/professores.model';

@Component({
  selector: 'app-alunos-create',
  templateUrl: './alunos-create.component.html',
  styleUrls: ['./alunos-create.component.css']
})
export class AlunosCreateComponent {

  aluno: Alunos = {
    nome: '',
    professor: '',
    categoria: '',
  }
  professores: Professor[] = [];

  constructor(private alunoService: AlunosService,
    private router: Router,
    private headerService: HeaderService,
    private professoresService: ProfessoresService){
    headerService.headerData = {
      title: 'Professores',
      icon: 'home',
      routeUrl: '/professores'
    }
  }

  ngOnInit(): void {
    this.professoresService.getProfessor().subscribe(professor => {
      this.professores = professor;
    })
  }

  criarAluno(){
    this.alunoService.criarAluno(this.aluno).subscribe(() => {
      this.alunoService.showMessage("Operação executada com sucesso!");
      this.router.navigate(['/dashboard/alunos']);
    })
  }
  cancel(){
    this.router.navigate(['dashboard/alunos']);
  }
}
