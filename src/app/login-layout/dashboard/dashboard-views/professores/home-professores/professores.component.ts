import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  navigateToProfessores(): void{
    this.router.navigate(['dashboard/professores/cadastro-professores'])
    
  }

}
