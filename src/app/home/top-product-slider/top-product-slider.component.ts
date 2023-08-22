import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-top-product-slider',
  templateUrl: './top-product-slider.component.html',
  styleUrls: ['./top-product-slider.component.css'],
  providers:[DataService]
})
export class TopProductSliderComponent {
  activeProductId:number;
  rupsign="₹";
  topcbdProduct:any=[];
  allCbdProduct:any=[];
  constructor(private dservice:DataService){
    this.activeProductId=0;
    this.allCbdProduct=[];
    this.topcbdProduct=[
      
    ];
  }
  
  
  ngOnInit(){
    const c=0;
    this.allCbdProduct=this.dservice.getcbdproducts();
    console.log(this.allCbdProduct);
    for (let index = 0; index < this.allCbdProduct.length; index++) {
      if(this.allCbdProduct[index].prod.rating >=4){
        this.topcbdProduct[c]=this.allCbdProduct[index].prod.rating;
      }
    }
  }

   opentab(num:number){
    console.log(num);
    this.activeProductId=num;
  }
}
