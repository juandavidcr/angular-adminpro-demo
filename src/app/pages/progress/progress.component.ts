import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {

  progreso: number = 40; 

  get getPorcentaje(){
            
    return `${this.progreso}%`
  }

  cambiarValor(valor:number){
    return this.progreso= this.progreso+valor;

    if (this.progreso>=100 && valor>=0) {
      return this.progreso=100;
    }
    if (this.progreso<=100 && valor<=100) {
      return this.progreso=0;
    }
  }
}
