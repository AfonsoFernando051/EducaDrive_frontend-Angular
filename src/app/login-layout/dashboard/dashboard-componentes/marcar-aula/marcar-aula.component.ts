import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog-service/confirmation-dialog.service';
import { Alunos } from '../../dashboard-views/models/alunos.model';
import { AlunosService } from '../../dashboard-views/alunos/alunos-service/alunos.service';
import { Professor } from '../../dashboard-views/models/professores.model';
import { ProfessoresService } from '../../dashboard-views/professores/professor-service/professores.service';
import { ReservarService } from './reservar.service';
import { Reserva } from '../../dashboard-views/models/reserva.model';

@Component({
  selector: 'app-marcar-aula',
  templateUrl: './marcar-aula.component.html',
  styleUrls: ['./marcar-aula.component.css']
})
export class MarcarAulaComponent implements OnInit{

  reserva: Reserva = {
    dia_semana: "",
    dia:"",
    hora: "",
    aluno: 0,
    professor: 0,
    categoria: "",
    veiculo: "",
    esta_pago: false 
  }
  alunos: Alunos[] = [];
  professor: Professor = {
    nome: '',
    veiculo1: '',
    veiculo2: '',
  }
  private dia:any;
  private hora:any;
  private timestamp:any;
  private diaSemana: any;
  isChecked: boolean = false;
  cellToChange: any = "";
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private confirmationDialogService: ConfirmationDialogService,
    private alunoService: AlunosService,
    private professorService: ProfessoresService,
    private reservaService: ReservarService,
   ) {}

  ngOnInit(): void {
    this.alunoService.getAluno().subscribe(aluno => {
      this.alunos = aluno;     
    })

    var profNome = this.data.professor.nome;
    this.dia = this.data.dia;
    this.hora = this.data.horario+":00";
    this.diaSemana = this.data.diaDaSemana;
    this.cellToChange = profNome+"-"+this.data.dia.dia+"-"+this.hora+"-"+this.data.dia.ano;    
    this.professor = this.data.professor;
    this.timestamp = this.data.dia.ano+"-"+this.data.dia.mes+"-"+this.dia.dia;
    
    this.reserva = {
      dia_semana: this.dia.nomeDoDiaDaSemana,
      dia:this.timestamp,
      hora: this.data.horario,
      aluno: 0,
      professor: this.professor.id ?? 0,
      categoria: "",
      veiculo: "",
      esta_pago: false 
    }
  }
  
  setCheckValue(event: any){
      if (event.checked) {
        this.isChecked = true; 
        this.reserva.esta_pago = true;
      } else {
        this.isChecked = false;
        this.reserva.esta_pago = false;
      }
  }

  reservar(){
    var cell = document.getElementById(this.cellToChange);

    this.reservaService.marcarAula(this.reserva).subscribe(() => {
      this.reservaService.showMessage("Operação executada com sucesso!");

      if(this.isChecked){
        cell?.classList.remove('aula-nao-paga');
        cell?.classList.add('aula-paga');
      }else{
        cell?.classList.remove('aula-paga')
        cell?.classList.add('aula-nao-paga')
      }

      this.dialogRef.close();
    })
  }

  fecharModal(){
    this.dialogRef.close();
  }

}
