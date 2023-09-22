import { Component, OnInit } from '@angular/core';
import { Professor } from '../professores.model';
import { ProfessoresService } from '../../professores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professores-delete',
  templateUrl: './professores-delete.component.html',
  styleUrls: ['./professores-delete.component.css']
})
export class ProfessoresDeleteComponent implements OnInit {

professor!: Professor;
private id = this.route.snapshot.paramMap.get('id') || '';

constructor(
  private professorService: ProfessoresService,
  private router: Router,
  private route: ActivatedRoute
){}

  ngOnInit(): void {
    this.professorService.readById(this.id).subscribe(professor => {
      this.professor = professor;
    })
  }

  deletarProfessor(): void{
    this.professorService.delete(this.id).subscribe(professor => {
      this.professorService.showMessage("Deletado com sucesso!");
      this.router.navigate(['/dashboard/professores'])
    })
  }
  
  cancel(): void{
    this.router.navigate(['/dashboard/professores'])
  }

}
