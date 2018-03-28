import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/goods/goods.module#GoodsModule'},
  {path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
