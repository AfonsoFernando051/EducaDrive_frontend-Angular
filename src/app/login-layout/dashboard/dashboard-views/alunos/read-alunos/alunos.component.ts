import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../models/alunos.model';
import { AlunosService } from '../alunos-service/alunos.service';
import { MatDialog } from '@angular/material/dialog';
import { AlunosDeleteComponent } from '../alunos-delete/alunos-delete.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno!: Alunos[];
  displayedColumns = ['id', 'nome', 'Professor', 'Categoria','action'];

  constructor(private alunoService: AlunosService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.alunoService.getAluno().subscribe(aluno => {
      this.aluno = aluno;      
    })
  }

  ModalDeleteAluno(id: number) {
    this.dialog.open(AlunosDeleteComponent, {
      width: '400px',
      height: '150px',
      data: {itemId: id}// Defina o tamanho do modal conforme sua necessidade.
    });
  }
}
