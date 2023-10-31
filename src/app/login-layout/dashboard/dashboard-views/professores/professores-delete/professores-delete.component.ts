import { Component, OnInit, Inject } from '@angular/core';
import { Professor } from '../../models/professores.model';
import { ProfessoresService } from '../professor-service/professores.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfessoresComponent } from '../home-professores/professores.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-professores-delete',
  templateUrl: './professores-delete.component.html',
  styleUrls: ['./professores-delete.component.css']
})
export class ProfessoresDeleteComponent{

professor!: Professor;
private id: Number;

constructor(
  private professorService: ProfessoresService,
  public dialogRef: MatDialogRef<ProfessoresComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { itemId: number }
){
  this.id = data.itemId;  
}

  deletarProfessor(): void{    
    this.professorService.delete(this.id).subscribe(professor => {
      this.professorService.showMessage("Deletado com sucesso!");
      this.dialogRef.close();
    })
  }

  fecharModal(){
    this.dialogRef.close();
  }

}
