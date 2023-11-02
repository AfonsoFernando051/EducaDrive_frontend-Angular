import { Injectable } from '@angular/core';
import { ObjetoDia } from '../../../dashboard-views/models/objetoDia.model';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  data = new Date();
  diaDaSemana: ObjetoDia[] = [];
  
  constructor() {
    this.diaDaSemana = this.obterDiaDaSemanaDeTodosOsDiasDoMes();
  }

  obterDiaDaSemanaDeTodosOsDiasDoMes() {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const resultado = [];

    const data = new Date();
    const mes = data.getMonth(); // Substitua pelo mês desejado (janeiro = 1, fevereiro = 2, etc.)

    while (data.getMonth() === mes) {
      const dia = data.getDate();
      const diaDaSemana = data.getDay(); 
      resultado.push({
        dia: dia,
        nomeDoDiaDaSemana: diasDaSemana[diaDaSemana]
      });
      data.setDate(dia + 1);
    }

  return resultado;
}
  
}



