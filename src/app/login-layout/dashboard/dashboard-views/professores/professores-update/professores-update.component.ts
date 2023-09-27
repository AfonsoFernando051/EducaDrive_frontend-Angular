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

  professor!: Professor;

  constructor(
    private professorService: ProfessoresService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  private id = this.route.snapshot.paramMap.get('id') || '';

  ngOnInit(): void {
    this.professorService.readById(this.id).subscribe(professor => {
      this.professor = professor;      
    });    

  }

  updateProfessor(): void{   
    const id = parseInt(this.id) 
    this.professorService.update(this.professor, id!).subscribe(professor => {
      this.professorService.showMessage("Atualizado com sucesso!");
      this.router.navigate(['/dashboard/professores'])
    })
  }

  cancel(): void{
    this.router.navigate(['/dashboard/professores'])
  }
}
