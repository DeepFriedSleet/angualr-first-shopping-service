import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../../../../../shared/Models/Product';

@Component({
  selector: 'app-add-to-cart',
  standalone: false,
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input() product!: Product;

  constructor(private cart: CartService) {}

  addToCart(): void {
    this.cart.add(this.product);
  }

}
