
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cbdProduct:any=[
    {
      id:Number,
      prodName:String,
      prod:[
        {
          name:String,
          details:String,
          newPrice:Number,
          oldPrice:Number,
          disPer:Number,
          disPri:Number,
          rating:Number,
          img:Image
        }]
    }
  ];
  constructor() { 
    this.cbdProduct=[
    {
      id:0,
      prodName:"CBD Oil",
      prod:[
        {
          name:"60mg CBD/1mL",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:4.5,
          img:"assets/img/top-pro-img-1.png"
        },
        {
          name:"10mg CBD/1mL",
          details:"Our most CBD per serving",
          newPrice:120.00,
          oldPrice:170.00,
          disPer:29.4,
          disPri:50.00,
          rating:4.0,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"100mg CBD/1mL",
          details:"Our most CBD per serving",
          newPrice:122.00,
          oldPrice:180.00,
          disPer:32.0,
          disPri:57.6,
          rating:3.5,
          img:"assets/img/top-pro-img-1.png"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:150.00,
          oldPrice:300.00,
          disPer:50.0,
          disPri:31.00,
          rating:5,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:150.00,
          oldPrice:300.00,
          disPer:50.0,
          disPri:31.00,
          rating:5,
          img:"assets/img/top-pro-img-1.png"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:150.00,
          oldPrice:300.00,
          disPer:50.0,
          disPri:31.00,
          rating:4.0,
          img:"assets/img/top-pro-img-1.png"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:150.00,
          oldPrice:300.00,
          disPer:50.0,
          disPri:31.00,
          rating:3.5,
          img:"assets/img/top-pro-img-1.png"
        }
      ]
    },
    {
      id:1,
      prodName:"CB Capsuls",
      prod:[
        {
          name:"CBD 60mg capsule",
          details:"Our most CBD per serving",
          newPrice:180.00,
          oldPrice:200.00,
          disPer:10.0,
          disPri:20.00,
          rating:3.5,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"CBD 100mg capsule",
          details:"Our most CBD per serving",
          newPrice:360.00,
          oldPrice:400.00,
          disPer:10.0,
          disPri:40.00,
          rating:4.5,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"CBD 100mg capsule",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:5,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"CBD 100mg capsule",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:3,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"CBD 100mg capsule",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:5,
          img:"assets/img/top-pro-img-2.png"
        },
        {
          name:"CBD 100mg capsule",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:4,
          img:"assets/img/top-pro-img-2.png"
        }
      ]
    },
    {
      id:2,
      prodName:"CBD Gummies",
      prod:[
        {
          name:"CBD Gummies",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:3,
          img:"assets/img/1cbd.svg"
        },
        {
          name:"CBD Gummies",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:5,
          img:"assets/img/1cbd.svg"
        },
        {
          name:"100mg CBD/1mL",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:4.5,
          img:"assets/img/1cbd.svg"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:4.5,
          img:"assets/img/1cbd.svg"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:4.5,
          img:"assets/img/1cbd.svg"
        },
        {
          name:"500mg CBD/10mL",
          details:"Our most CBD per serving",
          newPrice:119.00,
          oldPrice:150.00,
          disPer:20.6,
          disPri:31.00,
          rating:5,
          img:"assets/img/1cbd.svg"
        }
      ]
    }
  ]

 }

  getcbdproducts():any[]{
   
    return this.cbdProduct;
  }
}
