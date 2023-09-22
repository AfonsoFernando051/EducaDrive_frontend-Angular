import { Component } from '@angular/core';
import { HeaderService } from '../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/dashboard-home'
    }
  }

}
