import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {

  selectedCategory: string;

  getGoods(): any[] {
    let goods = [];

    for (let i = 0; i < 40; i++) {
      goods.push({ name: this.selectedCategory + ' Товар ' + i, description: 'Описание для товара ' + i })
    }

    return goods;
  }

  selectCategory(category: string){
    this.selectedCategory = category;
  }
}
