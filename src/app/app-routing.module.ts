import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home/homeComponent/homeComponent.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { CartComponent } from './pricing/cart/cart.component';
import { ShopCBDComponent } from './pricing/shop-cbd/shop-cbd.component';

const routes: Routes = [
  {
    component:HomeComponentComponent,
    path:""
  },
  {
    component:MainbodyComponent,
    path:"newArrival"
  },{
    component:ShopCBDComponent,
    path:"ShopCBD"
  },
  {
    component:MainbodyComponent,
    path:"gallery"
  },
  {
    component:MainbodyComponent,
    path:"blog"
  },
  {
    component:MainbodyComponent,
    path:"about"
  },
  {
    component:CartComponent,
    path:"cart"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
