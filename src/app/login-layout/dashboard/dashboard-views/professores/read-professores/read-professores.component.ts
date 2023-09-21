import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../../professores.service';
import { Professor } from '../professores.model';

@Component({
  selector: 'app-read-professores',
  templateUrl: './read-professores.component.html',
  styleUrls: ['./read-professores.component.css']
})
export class ReadProfessoresComponent implements OnInit {

professores: Professor[] | undefined = [];

constructor(private professoresService: ProfessoresService){}

ngOnInit(): void {

  this.professoresService.getProfessor().subscribe(professor => {
    console.log(professor);
    this.professores = professor;
  })
}

}
