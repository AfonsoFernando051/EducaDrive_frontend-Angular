import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../dashboard-componentes/dashboard-cabecalho/header-service/header.service';
import { DatasService } from '../../dashboard-componentes/agenda/services/datas.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  mes: number = 1;
  mesesDoAno = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  constructor(private headerService: HeaderService, private dataService: DatasService){
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/dashboard-home'
    }
  }

  ngOnInit(): void {
      this.mes = this.dataService.mes;
      this.mesesDoAno[this.mes]
  }

  lastMonth(){
    this.dataService.setLastMonth();
    this.mes = this.dataService.mes;
  }

  nextMonth(){
    this.dataService.setNextMonth();
    this.mes = this.dataService.mes;
  }

}
