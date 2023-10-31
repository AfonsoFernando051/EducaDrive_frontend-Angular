import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>, private router: Router){}

  fecharModal(){
    this.dialogRef.close();
  }

  sair() {
    localStorage.removeItem("token");
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
