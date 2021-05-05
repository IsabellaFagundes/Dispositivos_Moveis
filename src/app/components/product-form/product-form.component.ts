import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input() product;
  @Output() formSubmitted = new EventEmitter(); //emite um evento

  constructor() { }

  ngOnInit() { }

  sendEvent() { //cria o evento
    this.formSubmitted.emit();
  }

}
