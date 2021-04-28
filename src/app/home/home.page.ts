import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public counter = 0;
  public maxCounter = 0;
  public selectedValue = 0;

  public increment(){
    this.counter++;
    if (this.counter > this.maxCounter){ 
      this.maxCounter = this.counter;  //se o contador foi maior que o contador máximmo, contador máximo passa a ser igual o contador
    } // ou this.maxCounter = Math.max(this.counter, this.maxCounter); -> o maxCounter vai ser o maior numero entre maxCounter e Counter
  }

  public decrement(){
    this.counter --;
    if(this.counter <= 0){
      this.counter = 0; //se o contador for menor que 0, ele fica igual a 0
    }// ou this.counter = Math.max(this.counter -1, 0); -> o maxCounter vai ser o maior numero entre e o valor decrementado e 0
    
  }

  public reset(){
    this.counter = 0;
  }

  public incrementConta(){
    this.counter+= this.selectedValue;
    this.selectedValue = 0;
    if (this.counter > this.maxCounter){ 
      this.maxCounter = this.counter;  //se o contador foi maior que o contador máximmo, contador máximo passa a ser igual o contador
    } // ou this.maxCounter = Math.max(this.counter, this.maxCounter); -> o maxCounter vai ser o maior numero entre maxCounter e Counter
  }

  public decrementConta(){
    this.counter = Math.max(this.counter-this.selectedValue, 0);
    this.selectedValue = 0;
  }

  public resetConta(){
    this.counter = 0;
  }

}