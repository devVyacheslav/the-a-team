import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-good-menu',
  templateUrl: './good-menu.component.html',
  styleUrls: ['./good-menu.component.scss']
})
export class GoodMenuComponent implements OnInit {

  @Output() categorySelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  getCategories():any[]{
    let categories = [];

    for(let i =1; i<20; i++){
      categories.push({name: 'Категория '+i});
    }

    return categories;
  }
}
