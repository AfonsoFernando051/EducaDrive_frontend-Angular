import { Component } from '@angular/core';
import { HeaderService } from '../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';
import { DatasService } from '../../dashboard-componentes/agenda/services/datas.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  constructor(private headerService: HeaderService, private dataService: DatasService){
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/dashboard-home'
    }
  }

  lastMonth(){
    this.dataService.setLastMonth();
  }

  nextMonth(){
    this.dataService.setNextMonth();
  }

}
