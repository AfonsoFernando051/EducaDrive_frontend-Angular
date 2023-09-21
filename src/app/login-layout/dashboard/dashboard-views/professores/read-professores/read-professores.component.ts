import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../../professores.service';
import { Professor } from '../professores.model';

@Component({
  selector: 'app-read-professores',
  templateUrl: './read-professores.component.html',
  styleUrls: ['./read-professores.component.css']
})
export class ReadProfessoresComponent implements OnInit {

professores!: Professor[];
displayedColumns = ['id', 'nome', 'Veiculo Principal', 'action'];

constructor(private professoresService: ProfessoresService){}

ngOnInit(): void {

  this.professoresService.getProfessor().subscribe(professor => {
    this.professores = professor;
  })
}

}
