import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsService } from './services/products.service';
import { PostlistComponent } from './components/postlist/postlist.component';
import {HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    FooterComponent,
    PostlistComponent, PostlistComponent
  ],
  imports: [
    BrowserModule, /*HttpModule*/HttpClientModule
  ],
  providers: [ProductsService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
