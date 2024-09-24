import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnChanges {
  
  
  @Input() items: CartItem[] = [];
  
  total = 0
  
  @Output() idProductEventEmitter = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void { //hará algo cuando cambian los items
    // let itemsChanges = changes['items'] //nombre del atributo que recibimos ne le input
    this.calculateTotal();
    this.saveSession();

  }

  onRemove(id: number){
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal(): void {
    //reduce el flujo a un solo valor y se va cumulando en una variable acumulativa y hacemos el cáculo
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0); //0 es el numero desde el que parte 
  }

  saveSession(): void{
    //Json.stringofy convierte los datos del objeto a json y lo guarda en cart si no no podiramos usar el set titem, debe ser string 
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }
}
