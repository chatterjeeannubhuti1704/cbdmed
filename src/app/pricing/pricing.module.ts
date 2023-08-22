import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ShopCBDComponent } from './shop-cbd/shop-cbd.component';



@NgModule({
  declarations: [
    CartComponent,
    ShopCBDComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent
  ]
})
export class PricingModule { }
