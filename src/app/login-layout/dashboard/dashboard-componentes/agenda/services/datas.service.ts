import { Injectable } from '@angular/core';
import { ObjetoDia } from '../../../dashboard-views/models/objetoDia.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  diaDaSemana: ObjetoDia[] = [];
  date = new Date();
  mes: any = this.date.getMonth()+1;
  ano: any = this.date.getFullYear();
  private datasSubject = new BehaviorSubject<ObjetoDia[]>([]);
  datas$ = this.datasSubject.asObservable();

  constructor() {
    this.date.setMonth(this.mes)
    this.diaDaSemana = this.obterDiaDaSemanaDeTodosOsDiasDoMes(this.date, this.mes, this.ano);
  }

  setLastMonth(){
    this.mes = this.mes - 1;
    this.date.setMonth(this.mes)

    if(this.mes < 1){
      this.mes = 12;
      this.ano = this.ano - 1;
      this.date.setFullYear(this.ano)
      this.diaDaSemana = this.obterDiaDaSemanaDeTodosOsDiasDoMes(this.date, this.mes, this.ano);
    }else{
      this.diaDaSemana = this.obterDiaDaSemanaDeTodosOsDiasDoMes(this.date, this.mes, this.ano);
      this.datasSubject.next(this.diaDaSemana);
    }
  }

  setNextMonth(){
    this.mes = this.mes + 1;
    this.date.setMonth(this.mes)

    if(this.mes == 12){
      this.date.setMonth(11)
    }

    if(this.mes > 12){
      this.mes = 1;
      this.date.setMonth(1)
      this.ano = this.ano + 1;
      this.date.setFullYear(this.ano)
    }
    
    this.diaDaSemana = this.obterDiaDaSemanaDeTodosOsDiasDoMes(this.date, this.mes, this.ano);
    this.datasSubject.next(this.diaDaSemana);
  }

  obterDiaDaSemanaDeTodosOsDiasDoMes(date: any, mes: any, ano: any) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const resultado = [];

    while ((date.getMonth() === mes || (this.mes == 12 && this.date.getMonth() == 11))) {
      const dia = date.getDate();
      const diaDaSemana = date.getDay(); 
      resultado.push({
        dia: dia,
        nomeDoDiaDaSemana: diasDaSemana[diaDaSemana],
        mes: mes,
        ano: ano
      });
      date.setDate(dia + 1);
    }

    return resultado;
  }
  
}



