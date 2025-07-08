import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from './products/productslist/cart/cart.service';

@Injectable({ providedIn: 'root' })
export class ResetService {

  constructor(private cart: CartService) { }
  private resetSubject = new Subject<void>();
  reset$ = this.resetSubject.asObservable();

  triggerReset() {
    this.cart.clear();
    this.resetSubject.next();
  }
}
