import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductlistComponent } from '../components/productlist/productlist.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PostlistComponent } from '../components/postlist/postlist.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list', component: ProductlistComponent },
  { path: 'ajout', component: ProductlistComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [ ]
})
export class AppRoutingModule {}
