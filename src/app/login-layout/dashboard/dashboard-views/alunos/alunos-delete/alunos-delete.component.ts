import { Component, Inject } from '@angular/core';
import { Professor } from '../../models/professores.model';
import { AlunosService } from '../alunos-service/alunos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlunosComponent } from '../read-alunos/alunos.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alunos-delete',
  templateUrl: './alunos-delete.component.html',
  styleUrls: ['./alunos-delete.component.css']
})
export class AlunosDeleteComponent{

  private id: Number;

  constructor(
    private alunoService: AlunosService,
    public dialogRef: MatDialogRef<AlunosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { itemId: number }
  ){
    this.id = data.itemId;  
  }

  deletarAluno(): void{
    this.alunoService.delete(this.id).subscribe(aluno => {
      this.alunoService.showMessage("Deletado com sucesso!");
      this.dialogRef.close();
    })
  }
  
  fecharModal(){
    this.dialogRef.close();
  }

}
