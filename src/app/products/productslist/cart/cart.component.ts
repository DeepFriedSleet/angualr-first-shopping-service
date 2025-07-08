import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from '../../../../../shared/Models/CartItem';
import { Router } from '@angular/router';
import { ResetService } from '../../../reset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  @Input() stringCode: any;
  @Output() cartItems: CartItem[] = [];
  @Output() sum: number = 0;
  @Output() promo: number = 1;
  nonDiscountSum: number = 0;

  private subscription = new Subscription();

  constructor(private cart: CartService, private router: Router, private resetService: ResetService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.cart.publicCart.subscribe(list => {
        this.cartItems = list,
          this.calculateTotal();
      })
    );

    this.subscription.add(
      this.resetService.reset$.subscribe(() => {
        this.cart.clear();
        this.promo = 1;
        this.calculateTotal();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @Input() promoChange(promo: number) {
    this.promo = promo;
    this.calculateTotal();
    debugger;
  }

  private calculateTotal() {
    this.nonDiscountSum = this.cartItems.reduce((total, index) => total + index.product.price * index.quantity, 0);
    this.sum = this.nonDiscountSum * this.promo;
  }

  goTo(route: string) {
    const sum = this.sum;
    const size = this.cart.getSize();;
    const discount = this.nonDiscountSum - this.promo * this.nonDiscountSum;

    this.router.navigate([route], {
      queryParams: {
        sum,
        size,
        discount
      }
    });
  }

}
