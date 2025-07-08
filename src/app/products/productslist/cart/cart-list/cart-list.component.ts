import { Component, Input } from '@angular/core';
import { CartItem } from '../../../../../../shared/Models/CartItem';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  standalone: false,
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  @Input() cartItems: CartItem[] = [];

  constructor(private cart: CartService) { }

  increaseQty(item: CartItem) {
    this.cart.add(item.product);
  }

  decreaseQty(item: CartItem) {
    this.cart.remove(item);
  }

  removeAll(item: CartItem) {
    this.cart.removeAll(item);
  }

}
