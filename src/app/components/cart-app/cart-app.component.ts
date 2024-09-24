import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartItem } from '../../models/CartItem';
import { NavbarComponent } from "../navbar/navbar.component";
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartModalComponent, NavbarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];

  items: CartItem[] = [];

  // total: number = 0;

  showCart: boolean = false; //lo ponemos false por defecto

  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.service.findAll()
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || []; //toma los datos de la session pasando de json a items el inverso a stringofy
    // this.calculateTotal();
  }

  onAddCart(product: Product): void{
    const hasItem = this.items.find(item => item.product.id === product.id)

    if(hasItem) {

      this.items = this.items.map(item => {
        if(item.product.id === product.id){
          return {... item, quantity: item.quantity + 1}
        } 
        return item;
      })

    } else {
      this.items = [... this.items, {product, quantity: 1}];
      
    }
    // this.calculateTotal();
    // this.saveSession();

  }

  onRemove(id: Number): void{
    this.items = this.items.filter(item => item.product.id !== id); //filter se usa paa eliminar cuando el id que pasamos, que se emite del hijo cuando es distinto a alguno del id del producto de los items, lo asigna y cuadno es igual no lo pasa
    if(this.items.length == 0){
      sessionStorage.removeItem('cart')
      sessionStorage.clear()
    }
    // this.calculateTotal();
    // this.saveSession();
  }

  // calculateTotal(): void {
  //   //reduce el flujo a un solo valor y se va cumulando en una variable acumulativa y hacemos el cáculo
  //   this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0); //0 es el numero desde el que parte 
  // }

  // saveSession(): void{
  //   //Json.stringofy convierte los datos del objeto a json y lo guarda en cart si no no podiramos usar el set titem, debe ser string 
  //   sessionStorage.setItem('cart', JSON.stringify(this.items))
  // }

  openCloseCart(): void{
    this.showCart = !this.showCart; //la exclamación hace lo contrario al false
  }

  
}
