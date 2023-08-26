import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-top-product-slider',
  templateUrl: './top-product-slider.component.html',
  styleUrls: ['./top-product-slider.component.css'],
  providers: [DataService]
})
export class TopProductSliderComponent {
  activeProductId: number;
  rupsign = "₹";
  topcbdProduct: any;
  allCbdProduct: any;
  constructor(private dservice: DataService) {
    this.activeProductId = 0;
    this.allCbdProduct = [];
    this.topcbdProduct = [
      {
        id: Number,
        prodName: String,
        prod: [
          {
            name: String,
            details: String,
            newPrice: Number,
            oldPrice: Number,
            disPer: Number,
            disPri: Number,
            rating: Number,
            img: Image
          },
        ]
      },
      {
        id: Number,
        prodName: String,
        prod: [
          {
            name: String,
            details: String,
            newPrice: Number,
            oldPrice: Number,
            disPer: Number,
            disPri: Number,
            rating: Number,
            img: Image
          },
        ]
      },
      {
        id: Number,
        prodName: String,
        prod: [
          {
            name: String,
            details: String,
            newPrice: Number,
            oldPrice: Number,
            disPer: Number,
            disPri: Number,
            rating: Number,
            img: Image
          },
        ]
      }];
  }
  ngOnInit() {
    this.filldata();
  }
  filldata() {
    this.allCbdProduct = this.dservice.getcbdproducts(); for (var index in this.allCbdProduct) {
      this.topcbdProduct[index].prodName = this.allCbdProduct[index].prodName;
      this.topcbdProduct[index].id = this.allCbdProduct[index].id;
      this.topcbdProduct[index].prod = []; let c = 0;
      for (var proindex in this.allCbdProduct[index].prod) {

        if (this.allCbdProduct[index].prod[proindex].rating >= 4) {
          if (c <= 3) {
            this.topcbdProduct[index].prod[c] = this.allCbdProduct[index].prod[proindex];
            c = c + 1;
          }
        }
      }
    }
  }
  opentab(num: number) {
    console.log(num);
    this.activeProductId = num;
  }
}
