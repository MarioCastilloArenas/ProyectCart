import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data'; //importado desde data para recuperar el array de productos

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Product[]{
    return products;
  }
}
