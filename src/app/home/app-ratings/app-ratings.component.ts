import { Component } from '@angular/core';

@Component({
  selector: 'app-app-ratings',
  templateUrl: './app-ratings.component.html',
  styleUrls: ['./app-ratings.component.css']
})
export class AppRatingsComponent {
  customerRatings=[
    {
      customerName:"Abhishek Roy",
      customerImage:"assets/img/user1.svg",
      postedDate: "12/11/20" ,
      rating: 4.5,
      ratingTitle: " Best Products I have used",
      ratingDetails: "I use Charlotte's Web CBD Oil daily & I love it. It has helped me in so many ways, It's hard to explain."
    },
    {
      customerName:"Alexa Adele",
      customerImage:"assets/img/user2.svg",
      postedDate:" 2/12/20" ,
      rating: 4.0,
      ratingTitle: "Great Products",
      ratingDetails: "I love them! A restful nights sleep!"
    },
    {
      customerName:"Anuja Thapa",
      customerImage:"assets/img/user3.svg",
      postedDate: "21/10/20" ,
      rating: 3.5,
      ratingTitle: " Best Products I have used",
      ratingDetails: "I’ve tried a few different brands of CBD up to this point, but Charlotte’s Web is the best I’ve used yet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptates sequi eos omnis eaque impedit dolore, reiciendis praesentium quidem quia? Accusantium nihil assumenda reiciendis eum vel esse enim totam porro."
    },
    {
      customerName:"Asish Dsuza",
      customerImage:"assets/img/user4.svg",
      postedDate: "12/12/20" ,
      rating: 5.0,
      ratingTitle: " Best Products I have used",
      ratingDetails: "I use Charlotte's Web CBD Oil daily & I love it. It has helped me in so many ways, It's hard to explain.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptates sequi eos omnis eaque impedit dolore, reiciendis praesentium quidem quia? Accusantium nihil assumenda reiciendis eum vel esse enim totam porro."
    }
]
ngOnInit(){
  for (const user of this.customerRatings) {
    if(user.ratingDetails.length>100)
    {
     user.ratingDetails= user.ratingDetails.substring(0,95);}
}
}}
