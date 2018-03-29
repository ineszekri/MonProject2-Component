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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './routing/app.routingmodule';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    FooterComponent,
    PostlistComponent, PostlistComponent, WelcomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, /*HttpModule*/HttpClientModule,
    /*RouterModule.forRoot(routes),*/AppRoutingModule
  ],
  providers: [ProductsService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
