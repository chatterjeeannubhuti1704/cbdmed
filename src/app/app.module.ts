import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HashLocationStrategy,LocationStrategy} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';
import{PricingModule} from './pricing/pricing.module'


@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HomeModule,
    PricingModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
