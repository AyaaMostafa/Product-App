import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductCard } from './product-card/product-card';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetail } from './product-detail/product-detail';


@NgModule({
  declarations: [
    App,
    ProductCard,
    ProductDetail,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
