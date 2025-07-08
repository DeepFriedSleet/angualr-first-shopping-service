import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPromoCodeValidator } from '../validPromoCode';
import { CartItem } from '../../../../../../shared/Models/CartItem';
import { CartService } from '../cart.service';
import { ResetService } from '../../../../reset.service';
import { Subscription } from 'rxjs';

const promos: string[] = [
  "100%OFF",
  "FIRST*PROJECT",
  "A&GOOD&DEAL"
]

const deals: number[] = [
  0,
  0.70,
  0.50
]

const validPromo = createPromoCodeValidator(promos);

@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  @Input() sum: number = 0;
  @Input() promo: any;
  @Input() nonDiscountSum: number = 0;
  @Input() cartItems: CartItem[] = [];

  @Output() promoChange = new EventEmitter<number>();

  validPromoGroup = new FormGroup({
    discount: new FormControl('', [Validators.required, validPromo]),
  });

  private subscription = new Subscription();

  constructor(private cart: CartService, private resetService: ResetService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.resetService.reset$.subscribe(() => {
        this.validPromoGroup.reset();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getNumberOfProducts(): number {
    return this.cart.getSize();
  }

  getTotal() {
    return this.sum;
  }

  getPromoValue() {
    return this.nonDiscountSum - this.promo * this.nonDiscountSum;
  }

  applyPromo() {
    let code = this.validPromoGroup.get('discount')!.value as string;
    let index = promos.indexOf(code);
    if (index >= 0) {
      this.promo = deals[index];
    }
    this.promoChange.emit(this.promo);
    this.calculateTotal();
  }

  private calculateTotal() {
    this.nonDiscountSum = this.cartItems.reduce((total, index) => total + index.product.price * index.quantity, 0);
    this.sum = this.nonDiscountSum * this.promo;
  }

}
