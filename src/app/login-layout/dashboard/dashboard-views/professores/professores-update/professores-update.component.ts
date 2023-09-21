import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../../professores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../professores.model';

@Component({
  selector: 'app-professores-update',
  templateUrl: './professores-update.component.html',
  styleUrls: ['./professores-update.component.css']
})
export class ProfessoresUpdateComponent implements OnInit {

  professor: Professor = {
    nome: '',
    veiculo1: '',
    veiculo2: '',
  }

  constructor(
    private professorService: ProfessoresService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.professorService.readById(id ?? '5').subscribe(professor => {
      this.professor = professor;
      console.log(professor);

    });
    console.log(id);

    console.log(this.professor);
    
  }

  updateProfessor(): void{
    this.professorService.update(this.professor).subscribe(professor => {
      this.professorService.showMessage("Atualizado com sucesso!");
      this.router.navigate(['/dashboard/professores'])
    })
  }

  cancel(): void{
    this.router.navigate(['/dashboard/professores'])
  }
}
