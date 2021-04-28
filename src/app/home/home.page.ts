import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contador = 25;

  public Isabella = {
    nome: "isabella",
    ocupação: "Estagiária",
    idade: 21
  }

  public depositar() {
    this.contador += 50;
  }


  public currentValue = 12;

  constructor() { }
  public incrementValue() {
    this.currentValue++
  }
}