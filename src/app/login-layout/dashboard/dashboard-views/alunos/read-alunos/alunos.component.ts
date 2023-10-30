import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../models/alunos.model';
import { AlunosService } from '../alunos-service/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno!: Alunos[];
  displayedColumns = ['id', 'nome', 'Professor', 'Categoria','action'];

  constructor(private alunoService: AlunosService){}

  ngOnInit(): void {
    this.alunoService.getAluno().subscribe(aluno => {
      this.aluno = aluno;      
    })
  }
}
