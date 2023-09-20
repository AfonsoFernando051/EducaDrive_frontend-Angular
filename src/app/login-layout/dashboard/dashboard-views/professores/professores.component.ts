import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  navigateToProfessores(): void{
    this.router.navigate(['dashboard/dashboard-home/professores/cadastro-professores'])
    
  }

}
