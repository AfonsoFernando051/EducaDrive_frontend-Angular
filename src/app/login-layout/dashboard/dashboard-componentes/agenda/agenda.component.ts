import { Component, OnInit } from '@angular/core';
import { Professor } from '../../dashboard-views/models/professores.model';
import { ProfessoresService } from '../../dashboard-views/professores/professor-service/professores.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog-service/confirmation-dialog.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit{
  professores!: Professor[];
  diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  horarios = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
    '19:00', '20:00', '21:00'
  ];

  constructor(private professoresService: ProfessoresService, private confirmationDialogService: ConfirmationDialogService) {}

  openConfirmationDialog(data: object): void {    
    this.confirmationDialogService.openConfirmationDialog(data);
  }

  ngOnInit(): void {
    this.professoresService.getProfessor().subscribe(professor => {
      this.professores = professor;
    })    
  }
}
