import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professor-service/professores.service';
import { Professor } from '../../models/professores.model';
import { MatDialog } from '@angular/material/dialog';
import { ProfessoresDeleteComponent } from '../professores-delete/professores-delete.component';

@Component({
  selector: 'app-read-professores',
  templateUrl: './read-professores.component.html',
  styleUrls: ['./read-professores.component.css']
})
export class ReadProfessoresComponent implements OnInit {

professores!: Professor[];
displayedColumns = ['id', 'nome', 'Veiculo Principal', 'action'];

constructor(private professoresService: ProfessoresService, public dialog: MatDialog){}

ngOnInit(): void {
  this.professoresService.getProfessor().subscribe(professor => {
    this.professores = professor;
  })
}

abrirModalDelete(id: number) {
  this.dialog.open(ProfessoresDeleteComponent, {
    width: '400px',
    height: '150px',
    data: {itemId: id}// Defina o tamanho do modal conforme sua necessidade.
  });
}

}
