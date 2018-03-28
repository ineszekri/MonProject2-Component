import { Component, OnInit, OnChanges } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public data: Produit[];
  constructor( private _service: ProductsService) {

  }

  ngOnInit() { this.data = this._service.getAllProduct(); }

}
