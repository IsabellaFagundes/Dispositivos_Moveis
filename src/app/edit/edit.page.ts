import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public id;

  constructor(private route: ActivatedRoute) {  //injeto a ActivatedRoute com a rota que está sendo usada para a página
    this.id = route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
  }

}
