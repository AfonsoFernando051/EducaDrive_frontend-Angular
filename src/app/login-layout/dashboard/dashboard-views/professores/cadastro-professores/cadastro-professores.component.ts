import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professor-service/professores.service';
import { Router } from '@angular/router';
import { Professor } from '../../models/professores.model';
@Component({
  selector: 'app-cadastro-professores',
  templateUrl: './cadastro-professores.component.html',
  styleUrls: ['./cadastro-professores.component.css']
})
export class CadastroProfessoresComponent implements OnInit{

  professor: Professor = {
    nome: '',
    veiculo1: '',
    veiculo2: '',
  }

  constructor(private professorService: ProfessoresService, private router: Router){}

  ngOnInit(): void {
  }

  criarProfessor(){
    this.professorService.criarProfessor(this.professor).subscribe(() => {
      this.professorService.showMessage("Operação executada com sucesso!");
      this.router.navigate(['/dashboard/professores']);

    })
  }
  cancel(){
    this.router.navigate(['dashboard/professores']);
  }
}
