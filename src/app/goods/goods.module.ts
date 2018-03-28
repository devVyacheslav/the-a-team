import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsRoutingModule } from './goods-routing.module';
import { CoreModule } from '../core/core.module';
import { GoodCardComponent } from './good-card/good-card.component';
import { GoodMenuComponent } from './good-menu/good-menu.component';
import { GoodsListComponent } from './goods-list/goods-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    GoodsRoutingModule
  ],
  declarations: [GoodsComponent, GoodCardComponent, GoodMenuComponent, GoodsListComponent]
})
export class GoodsModule { }
