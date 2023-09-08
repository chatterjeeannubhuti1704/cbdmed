import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ShopCBDComponent } from './shop-cbd/shop-cbd.component';
import { NgxSliderModule } from 'ngx-slider-v2';


@NgModule({
  declarations: [
    CartComponent,
    ShopCBDComponent
  ],
  imports: [
    CommonModule,
    NgxSliderModule,
  ],
  exports:[
    CartComponent
  ]
})
export class PricingModule { }
