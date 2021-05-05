import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public newProduct = {  //como estamos na pagina de criar um produto, as informações ficam em branco, vazio
    name: '',
    price: 0
  };

  constructor() { }

  ngOnInit() {
  }

  public criarProduto() { //função criar produto
    console.log('Criando produto', this.newProduct);
  }

}
