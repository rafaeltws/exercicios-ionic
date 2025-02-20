import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  tempCelsius = 0;
  tempFahrenheit = 0;
  celsiusTemp = 0;
  fahrenheitTemp = 0;

  converterUm(){
    this.tempFahrenheit=(this.tempCelsius * 9 + 160) / 5;
  }

  converterDois(){
    this.celsiusTemp=(this.fahrenheitTemp - 32) * (5 / 9);
  }


}
