import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Transaction {
  date: Date;
  amount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public counter = 0;
  public selectedValue = 0;
  public transactions: Transaction[] = [];

  constructor(private alertController: AlertController) {

  }

  public deposit() {
    this.counter += this.selectedValue;
    this.transactions.unshift({ //insere um novo elemento no começo da lista
      amount: this.selectedValue,
      date: new Date()
    })
    this.selectedValue = 0;
  }

  /*
  public async confirmReset(){
    const alert = await this.alertController.create({
      header:'Tem certeza?',
      message:'Essa operação não poderá ser desfeita!',
      buttons:[
        {
          text: 'Sim',
          handler: () => {
            this.transactions.unshift ({
              amount: -this.counter,
              date: new Date()
            });
            this.counter = 0;
            this.selectedValue =0;
          }
        }, 
        'Me enganei'
      ]
    });
    alert.present();
  } */

  public async confirmWipe() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'Essa operação não poderá ser desfeita!',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.wipeAccount();
          }
        },
        'Me enganei'
      ]
    });
    alert.present();
  }

  private wipeAccount(){ //limpar a conta
    this.transactions.unshift({ //faz a operação de sacar tudo aparecer no "extrato"
      amount: -this.counter,
      date: new Date()
    });
    this.counter = 0; //"limpa" a conta
    this.selectedValue = 0;
  }

}
