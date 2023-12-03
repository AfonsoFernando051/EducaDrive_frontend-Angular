import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professor-service/professores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../../models/professores.model';

@Component({
  selector: 'app-professores-update',
  templateUrl: './professores-update.component.html',
  styleUrls: ['./professores-update.component.css']
})
export class ProfessoresUpdateComponent implements OnInit {

  professor: Professor = {
    id:0,
    nome:'',
    veiculo1:'',
    veiculo2:'',
    escola_id: 1
  };


  constructor(
    private professorService: ProfessoresService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.professorService.readById(id).subscribe(professor => {
      this.professor = professor[0];             
    });    
  }

  updateProfessor(): void{  
    const id = parseInt(this.route.snapshot.paramMap.get('id') || ''); 
    this.professorService.update(this.professor, id!).subscribe(professor => {
      this.professorService.showMessage("Atualizado com sucesso!");
      this.router.navigate(['/dashboard/professores'])
    })
  }

  cancel(): void{
    this.router.navigate(['/dashboard/professores'])
  }
}
