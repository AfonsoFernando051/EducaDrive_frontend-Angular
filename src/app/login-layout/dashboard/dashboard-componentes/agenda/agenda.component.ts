import { Component, OnInit } from '@angular/core';
import { Professor } from '../../dashboard-views/models/professores.model';
import { ProfessoresService } from '../../dashboard-views/professores/professor-service/professores.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog-service/confirmation-dialog.service';
import { DatasService } from './services/datas.service';
import { ObjetoDia } from '../../dashboard-views/models/objetoDia.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit{
  
  date = new Date()
  professores!: Professor[];
  diaDaSemana: ObjetoDia[] = []
  horarios = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
    '19:00', '20:00', '21:00'
  ];

  constructor(private professoresService: ProfessoresService,
    private confirmationDialogService: ConfirmationDialogService,
    private dataService: DatasService) {}

  openConfirmationDialog(data: object): void {    
    this.confirmationDialogService.openConfirmationDialog(data);
  }

  ngOnInit(): void {
    this.professoresService.getProfessor().subscribe(professor => {
      this.professores = professor;
    })    
    
    this.dataService.datas$.subscribe((datas) => {
      this.diaDaSemana = this.dataService.diaDaSemana;
      // Atualize a exibição com as novas datas
    });
  }
  
}
