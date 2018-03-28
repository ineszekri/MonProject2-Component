import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable()
export class ProductsService {

  constructor() { }
getAllProduct(): Produit[] {
  return  [
    { code: 'P200', nom: 'café', prixUnitaire: 1200 , imageurl: 'https://openclipart.org/download/217814/AvatarVache01.svg'},
    { code: 'P300', nom: 'jux', prixUnitaire: 1100, imageurl: 'https://openclipart.org/download/217814/AvatarVache01.svg' },
    { code: 'P400', nom: 'lait', prixUnitaire: 1300, imageurl: 'https://openclipart.org/download/217814/AvatarVache01.svg' }
  ];
}
}
