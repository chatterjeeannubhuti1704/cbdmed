import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-blogs-section',
  templateUrl: './app-blogs-section.component.html',
  styleUrls: ['./app-blogs-section.component.css']
})
export class AppBlogsSectionComponent {
 constructor(private route: Router){}
blogs=[
 {
  blogTitle:"CANNABIS 101: CHARLOTTE’S WEB VS. HEMP SEED OIL VS. MARIJUANA",
  blogImg:"assets/img/blg1.svg"
},
 {
  blogTitle:"CHARLOTTE’S WEB ORIGINAL FORMULA AND 60MG:WHAT’S  THE DIFFERENCE?",
  blogImg:"assets/img/blg2.svg"
},
 {blogTitle:"WHAT IS CBD?",
 blogImg:"assets/img/blg3.svg"}
]
gotoBlog(){
  console.log('vv')
this.route.navigate(["blog"])
}
}
