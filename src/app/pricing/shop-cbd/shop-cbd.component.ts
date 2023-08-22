import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-shop-cbd',
  templateUrl: './shop-cbd.component.html',
  styleUrls: ['./shop-cbd.component.css'],
  providers:[DataService]
})
export class ShopCBDComponent {
  rupsign="₹";
  products:any;
  constructor(private dservice:DataService){
    this.products=[];}
  ngOnInit(){
  this.products=this.dservice.getcbdproducts();
}
}
