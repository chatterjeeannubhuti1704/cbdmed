import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-shop-cbd',
  templateUrl: './shop-cbd.component.html',
  styleUrls: ['./shop-cbd.component.css'],
  providers:[DataService]
})
export class ShopCBDComponent {
  rupsign="₹";
  products:any;
  filterByCategoryid:number;
  constructor(private dservice:DataService){
    this.products=[];
    this.filterByCategoryid=10;
  }
  minValue: number = 10;
  maxValue: number = 40;

  options: Options = {
    floor: 0,
    ceil: 100
  };

  ngOnInit(){
  this.products=this.dservice.getcbdproducts();
 
}
filterByCategory(n:number){
  
  this.filterByCategoryid= n;
}
}
