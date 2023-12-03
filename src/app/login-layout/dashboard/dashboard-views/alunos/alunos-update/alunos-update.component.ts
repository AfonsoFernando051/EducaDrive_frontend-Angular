import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos-service/alunos.service';
import { Router } from '@angular/router';
import { Alunos } from '../../models/alunos.model';
import { HeaderService } from '../../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';
import { ProfessoresService } from '../../professores/professor-service/professores.service';
import { Professor } from '../../models/professores.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-update',
  templateUrl: './alunos-update.component.html',
  styleUrls: ['./alunos-update.component.css']
})
export class AlunosUpdateComponent {

  aluno: Alunos = {
    nome: '',
    professor: '',
    categoria: '',
  }
  professores: Professor[] = [];

  constructor(private alunoService: AlunosService,
    private router: Router,
    private headerService: HeaderService,
    private professoresService: ProfessoresService,
    private route: ActivatedRoute
    ){
    headerService.headerData = {
      title: 'Professores',
      icon: 'home',
      routeUrl: '/professores'
    }
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.professoresService.getProfessor().subscribe(professor => {
      this.professores = professor;      
    })
    this.alunoService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    })
  }

  atualizarAluno(){
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    
    this.alunoService.update(this.aluno, id).subscribe(() => {
      this.alunoService.showMessage("Operação executada com sucesso!");
      this.router.navigate(['/dashboard/alunos']);
    })
  }
  cancel(){
    this.router.navigate(['dashboard/alunos']);
  }
}