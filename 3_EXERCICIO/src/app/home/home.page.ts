import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  notaUm = '';
  notaDois = '';
  notaTres = '';
  notaQuatro = '';
  media: any ='';
  mensagem= '';

  calcularMedia(){
    this.media=((parseFloat(this.notaUm) + parseFloat(this.notaDois) + parseFloat(this.notaTres) + parseFloat(this.notaQuatro)) / 4 ).toFixed(1).toString()

    if(this.media < 3){
      this.mensagem = "Você está reprovado, mais sorte ano que vem!"
    } else if(this.media > 3 && this.media <= 5.9){
      this.mensagem = "Você está de recuperação, boa sorte!"
    } else {
      this.mensagem = "VOCÊ ESTÁ APROVADO!!"
    }
  }
}
