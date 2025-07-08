import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../../../../../shared/Models/CartItem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartsummary',
  standalone: false,
  templateUrl: './cartsummary.component.html',
  styleUrl: './cartsummary.component.css'
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(public cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart.publicCart.subscribe(list => this.cartItems = list);
  }

  removeCartItem(cartItem: CartItem) {
    this.cart.remove(cartItem);
  }

  clearCart() {
    this.cart.clear();
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

}
