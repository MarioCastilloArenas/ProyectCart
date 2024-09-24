import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import Swal from 'sweetalert2'

@Component({
  selector: 'div [app-product-cart]',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
})
export class ProductCartComponent {

  @Input() product!: Product;

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter;

  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carro",
      showConfirmButton: false,
      timer: 1500
    });
  }

}
