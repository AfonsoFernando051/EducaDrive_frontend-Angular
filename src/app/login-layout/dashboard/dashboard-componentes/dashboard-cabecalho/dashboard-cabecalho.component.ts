import { Component } from '@angular/core';
import { HeaderService } from './header-service/header.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-dashboard-cabecalho',
  templateUrl: './dashboard-cabecalho.component.html',
  styleUrls: ['./dashboard-cabecalho.component.css']
})
export class DashboardCabecalhoComponent{

  constructor(private headerService: HeaderService, public dialog: MatDialog){}

  get title(): string{
    return this.headerService.headerData.title
  }

  get icon(): string{
    return this.headerService.headerData.icon
  }
  
  get routeUrl(): string{
    return this.headerService.headerData.routeUrl
  }
  
  abrirModalSair() {
    this.dialog.open(LogoutComponent, {
      width: '400px',
      height: '150px' // Defina o tamanho do modal conforme sua necessidade.
    });
  }
}
