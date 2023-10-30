import { Component } from '@angular/core';
import { Professor } from '../../models/professores.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos-service/alunos.service';

@Component({
  selector: 'app-alunos-delete',
  templateUrl: './alunos-delete.component.html',
  styleUrls: ['./alunos-delete.component.css']
})
export class AlunosDeleteComponent{

private id = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private alunoService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  deletarAluno(): void{
    this.alunoService.delete(this.id).subscribe(aluno => {
      this.alunoService.showMessage("Deletado com sucesso!");
      this.router.navigate(['/dashboard/alunos'])
    })
  }
  
  cancel(): void{
    this.router.navigate(['/dashboard/aluno'])
  }

}
