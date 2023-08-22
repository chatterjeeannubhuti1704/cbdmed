import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './homeComponent/homeComponent.component';
import { TopProductSliderComponent } from './top-product-slider/top-product-slider.component';
import { BannerOneComponent } from './banner-one/banner-one.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { AppFeaturedSliderComponent } from './app-featured-slider/app-featured-slider.component';
import { AppRatingsComponent } from './app-ratings/app-ratings.component';
import { AppBlogsSectionComponent } from './app-blogs-section/app-blogs-section.component';



@NgModule({
  declarations: [
    HomeComponentComponent,
    TopProductSliderComponent,
    BannerOneComponent,
    BannerTwoComponent,
    AppFeaturedSliderComponent,
    AppRatingsComponent,
    AppBlogsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponentComponent
  ]
})
export class HomeModule { }
