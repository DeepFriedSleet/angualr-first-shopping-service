import { Injectable } from '@angular/core';
import { Product } from '../../../../../shared/Models/Product';
import { CartItem } from '../../../../../shared/Models/CartItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: CartItem[] = [];
  private readonly privateCart = new BehaviorSubject<CartItem[]>([]);
  readonly publicCart = this.privateCart.asObservable();

  private size: number = 0;

  add(product: Product): void {
    let index: number;
    index = this.cart.findIndex(item => item.product.id === product.id);
    if (index < 0) {
      this.cart.push(new CartItem(product, 1));
    } else {
      this.cart[index].quantity = this.cart[index].quantity + 1;
    }
    this.size = this.size + 1;
    this.privateCart.next(this.cart);
  }

  remove(cartItem: CartItem) {
    let index: number;
    index = this.cart.findIndex(item => item.product.id === cartItem.product.id);
    this.cart[index].quantity = this.cart[index].quantity - 1;
    if (this.cart[index].quantity === 0) {
      this.cart.splice(index, 1);
    }
    this.size = this.size - 1;
    this.privateCart.next(this.cart);
  }

  clear() {
    this.cart.splice(0, this.cart.length);
    this.size = 0;
    this.privateCart.next(this.cart);
  }

  getSize() {
    return this.size;
  }

  removeAll(cartItem: CartItem) {
    let index: number;
    index = this.cart.findIndex(item => item.product.id === cartItem.product.id);
    this.size = this.size - this.cart[index].quantity;
    this.cart.splice(index, 1);
    this.privateCart.next(this.cart);
  }

}
