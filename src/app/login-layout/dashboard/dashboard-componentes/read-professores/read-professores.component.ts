import { Component, OnInit } from '@angular/core';
import { Professor } from '../../dashboard-views/professores/professores.model';
import { ProfessoresService } from '../../dashboard-views/professores.service';

@Component({
  selector: 'app-read-professores',
  templateUrl: './read-professores.component.html',
  styleUrls: ['./read-professores.component.css']
})
export class ReadProfessoresComponent implements OnInit {

professores: Professor[] = [{
  nome: 'teste',
  veiculo1 : 'carro',
  veiculo2: 'moto'
}];

constructor(private professoresService: ProfessoresService){}

ngOnInit(): void {
  this.professoresService.getProfessor().subscribe(professores => {
    this.professores.push(professores);
    console.log(this.professores);
    
  })
}

}
