import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog-service/confirmation-dialog.service';
import { Alunos } from '../../dashboard-views/models/alunos.model';
import { AlunosService } from '../../dashboard-views/alunos/alunos-service/alunos.service';
import { Professor } from '../../dashboard-views/models/professores.model';
import { ProfessoresService } from '../../dashboard-views/professores/professor-service/professores.service';
@Component({
  selector: 'app-marcar-aula',
  templateUrl: './marcar-aula.component.html',
  styleUrls: ['./marcar-aula.component.css']
})
export class MarcarAulaComponent implements OnInit{

  isChecked: boolean = false;
  cellToChange: any = "";
  alunos: Alunos[] = [];
  professor: Professor = {
    nome: '',
    veiculo1: '',
    veiculo2: '',
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private confirmationDialogService: ConfirmationDialogService,
    private alunoService: AlunosService,
    private professorService: ProfessoresService) {}

  ngOnInit(): void {
    this.alunoService.getAluno().subscribe(aluno => {
      this.alunos = aluno;     
    })

    var profNome = this.data.professor.nome;
    var dia = this.data.dia;
    var hora = this.data.horario;
    this.cellToChange = profNome+"-"+dia+"-"+hora;
    this.professor = this.data.professor;
  }
  
  setCheckValue(event: any){
      if (event.checked) {
        this.isChecked = true; console.log('Checkbox está marcado');
      } else {
        this.isChecked = false; console.log('Checkbox nao está marcado');
      }
  }

  reservar(){
    var cell = document.getElementById(this.cellToChange);
    var check = document.getElementById("checkClassPay");

    this.dialogRef.close();

    if(this.isChecked){
      cell?.classList.remove('aula-nao-paga')
      cell?.classList.add('aula-paga')
    }else{
      cell?.classList.remove('aula-paga')
      cell?.classList.add('aula-nao-paga')
    }
  }

  fecharModal(){
    this.dialogRef.close();
  }

}
