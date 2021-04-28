import { Component } from '@angular/core';

type DeliveryStatus = 'finished' | 'preparing' | 'onRoute' | 'delivered'; //toda vez que me referir a status, estou me referindo a algun desses 4
interface Delivery //interface pois é um objeto, mas poderia ser um type também, aqui eu defino quais campos eu tenho nesse objeto
  {
  name: string,
  status: DeliveryStatus, 
  sedex: boolean,
  daysSinceBought: number,
  estimatedDaysToDeliver: number;
  } //um delivery é isso, serve para ajudar o TS a verificar
  //ambos são restrições do código

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public deliveries: Delivery[] =[
    {
      name: "TV",
      status: "finished", 
      sedex: true,
      daysSinceBought: 15,
      estimatedDaysToDeliver: 14
    } ,    {
      name: 'Smartphone',
      status: "onRoute",
      sedex: false,
      daysSinceBought: 20,
      estimatedDaysToDeliver: 22

    }
  ]
  constructor() {}

}