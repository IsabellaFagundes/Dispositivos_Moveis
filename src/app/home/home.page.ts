import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* Opção padrão:
  private AlertController: AlertController
  constructor(ac: AlertController) {  ac é uma variável do tipo AlertController (quero receber uma variável do tipo tal)
   this.AlertController = ac;
  } */

  //Opção mais curta/simplificada
  constructor(private alertController: AlertController) { //a variável que recebo aqui, já aguarda pra mim na propriedade privada AlertController

  }

  /* Opção
  public mostrarAlerta() {
    const alert = this.alertController.create({ //promise de alerta, vai criar o alerta, mas pode demorar, e não vai travar a tela
      header: "Olá",
      buttons: ['Ok', 'Cancelar'],
      message: 'Estou usando injeção de dependências'
    });
    
    
    alert.then(function(a)){ //posso chamar tudo que posso chamar na promise, "a" é um elemento que o ionic prometeu
      a.present(); // quando trouxer o resultado, vai apresentá-lo
    } */

  public async mostrarAlerta() { //deixa de ser uma promise, e passa a ser uma função assíncrona
    const alert = await this.alertController.create({ //vai esperar o alertController ficar "pronto"
      header: "Removendo item",
      buttons: [
        {
          text: 'Remover',
          handler: () => {
            this.mostrarAlertaDois();
          }
        }, {
          text: 'Cancelar',
          handler: () => {
            console.log('cancelar');
          }
        }
      ],
      message: 'Tem certeza?'
    });
    await alert.present();
  }


  public async mostrarAlertaDois() { 
    const alert = await this.alertController.create({ 
      header: "Removendo item",
      buttons: [
        {
          text: 'SIM, JÁ FALEI',
          handler: () => { //é o mesmo que function()
            console.log('Ok, removendo');
          }
        }, {
          text: 'Me enganei',
          handler: () => { //é o mesmo que function()
            console.log('cancelar');
          }
        }
      ],
      message: 'Tem certeza MESMO?'
    });
   await alert.present();
  }


}
