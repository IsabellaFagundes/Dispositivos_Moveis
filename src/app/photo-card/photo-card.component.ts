import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {

  @Input() public id: number; //tenho o id e recebo ele como imput, é uma entrada

  constructor() { }

  ngOnInit() { }

}
