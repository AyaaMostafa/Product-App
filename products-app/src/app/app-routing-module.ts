import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetail } from './product-detail/product-detail';
import { App } from './app';
import { Cart } from './cart/cart'
;


const routes: Routes = [
  {path: '', component: App},
  {path: 'product/:id', component: ProductDetail},
  {path: 'cart', component: Cart}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
