import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {


  @Input() items: CartItem[] = [];

  // @Input() total = 0

  @Output() idProductEventEmitter = new EventEmitter();

  @Output() openEventEmitter = new EventEmitter();
  
  onRemove(id: number){
    this.idProductEventEmitter.emit(id);
  }
  openCloseCart(): void {
    this.openEventEmitter.emit(); 
  }

}
