import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    ProductCartComponent
  ],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {

  @Input() products!: Product[];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter;

  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }

}
