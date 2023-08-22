import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  rupsign="₹";sum=0;
  cartProducts=[
    {
      id:0,
      name:"cbd oil 60mg CBD/1mL",
      quantity:2,
      unitPrice:500,
      totalPrice:1000,
      oldPrice:700,
      dispercent:0,
      saveamt:0,
    },
    {
      id:1,
      name:"cbd capsul 60mg ",
      quantity:5,
      unitPrice:300,
      totalPrice:1500,
      oldPrice:700,
      dispercent:0,
      saveamt:0
    },
    {
      id:2,
      name:"cbd bio oil 100mg/1mL",
      quantity:1,
      unitPrice:1500,
      totalPrice:1500,
      oldPrice:700,
      dispercent:0,
      saveamt:0
    },
    {
      id:3,
      name:"cbd tab 20mg",
      quantity:12,
      unitPrice:100,
      totalPrice:1200,
      oldPrice:700,
      dispercent:0,
      saveamt:0
    }
   ]
   ngOnInit(){
    for (let index = 0; index < this.cartProducts.length; index++) {
      this.sum+=this.cartProducts[index].totalPrice;
    }
    console.log(this.cartProducts);}
    removeOne(index:number){
      if(this.cartProducts[index].quantity>0){
      this.cartProducts[index].quantity=this.cartProducts[index].quantity-1;}}
    addOne(index:number){
      this.cartProducts[index].quantity=this.cartProducts[index].quantity+1;
    }
}
