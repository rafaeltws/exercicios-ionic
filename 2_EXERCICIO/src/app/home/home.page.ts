import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  ehTriangulo = ''
  tipoTriangulo = ''
  ladoUm = 0;
  ladoDois = 0;
  ladoTres = 0;

  verificarTriangulo(){
   if(this.ladoUm + this.ladoDois >= this.ladoTres){
    this.ehTriangulo = "É triangulo!"
   } else{
    this.ehTriangulo = "Não é triangulo!"
   }
  }

  tipoDoTriangulo(){
    if(this.ehTriangulo === "Não é triangulo!" ){
      this.tipoTriangulo = "Tem que ser um triangulo para definir o tipo!"
      return
    }else if(this.ladoUm === this.ladoDois && this.ladoUm === this.ladoTres){
      this.tipoTriangulo = "O triangulo equilátero!"
    } else if(this.ladoUm === this.ladoDois){
      this.tipoTriangulo = "O triangulo isósceles!"
    } else if(this.ladoUm !== this.ladoDois && this.ladoUm !== this.ladoTres && this.ladoTres !== this.ladoDois){
      this.tipoTriangulo = "O triangulo escaleno!"
    }

  }
}
