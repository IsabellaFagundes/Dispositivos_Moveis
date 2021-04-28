import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

interface Result{
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results: Result[] = [
    {
      title: 'Nova York',
      img: "https://viagemeturismo.abril.com.br/wp-content/uploads/2018/03/istock-627041138.jpg?quality=70&strip=info&w=1024",
      description: 'Cidade agitada, cheia de baladas, resutaurantes e bares, perfeita para quem ama agito'
    }, {
      title: 'Veneza',
      img : 'https://www.estudopratico.com.br/wp-content/uploads/2018/07/veneza-riatlo.jpg',
      description: 'Cidade romantica, perfeito para quem está em busca tranquilidade, um bom vinho e uma gastronomia impecável'
    }, {
      title: 'Bali',
      img : 'https://www.voltaaomundo.pt/files/2019/09/Kelingking-741x486_c.jpg',
      description: 'Repleta de praias deslumbrantes, os mais lindos templos religiosos, perfeito para quem quer estar em contato com a natureza, e em busca de paisagens de tirar o folego'
    }
    
  ];

  public questions =[
    {
      text: "Qual marca de carro mais tem a ver com você?",
      options: ['Tesla', 'Ferrari', 'Jeep']
    }, {
      text: "Qual comida você gosta mais?",
      options: ['Hamburger', 'Pizza', 'Frutos do Mar']
    }, {
      text: "Qual estação do ano você gosta mais?",
      options: ['Inverno', 'Primavera', 'Verão']
    }
  ];

  public score = [0, 0, 0,];

  public currentQuestion = 0; //qual a questão que o usuário está
  public selectedOption = null;
  public resultIndex = null; //guarda o indice máximo

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { //toast: x e x perguntas respondidas | alert: tem certeza?

  }

  public async confirmResetQuiz() { //mostra um alertcontroller perguntando se o usuário tem certeza que que reiniciar
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'Seu resultado será perdido!',
      buttons: [
        {
          text: 'Refazer quiz',
          handler: () => this.resetQuiz()
        },
        'Ops! Me enganei'
      ]
    });
    alert.present();
  }

  public nextQuestion() {
    this.score[this.selectedOption]++; //contabiliza os pontos da opção que foi selecionada pelo usuário
    this.currentQuestion++;
    this.selectedOption = null; //para a próxima pergunta, nenhuma opção deve estar selecionada

    this.showToast(); //mostra a alert com o numero de perguntas respondidas

    if (this.currentQuestion >= this.questions.length) {
      this.calculateResult();
    }
  }

  private resetQuiz() { //reinicia o quiz, reseta o score e o currentQuestion (que indica em qual questão o usuário está)
    this.score = [0, 0, 0, 0];
    this.currentQuestion = 0;
  }

  private calculateResult() { //calcula os pontos
    // let indiceMaximo = 0;
    // for (let i = 1; i < this.score.length; i++) {
    //   if (this.score[i] > this.score[indiceMaximo]) {
    //     indiceMaximo = i;
    //   }
    // }
    const valorMaximo = Math.max(...this.score);//os ... é como se pegasse uma lista e passasse cada um como argumento
    const indiceMaximo = this.score.findIndex(s => s === valorMaximo); //o valor máximo é o score máximo e eu encontro o indice onde esta o valor máximo

    this.resultIndex = indiceMaximo;
  }

  private async showToast() { //alerta de x de x perguntas respondidas, na parte inferior da tela
    const toast = await this.toastCtrl.create({
      header: this.currentQuestion + '/' + this.questions.length + ' perguntas respondidas',
      duration: 500 //duração da mensagem na tela
    });
    toast.present();
  }


}
