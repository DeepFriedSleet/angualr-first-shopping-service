import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totals',
  standalone: false,
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.css'
})
export class TotalsComponent {
  tax: number = 0;
  taxRate: number = 0.0475;
  @Input() sum: number = 0;
  @Input() size: number = 0;
  @Input() discount: number = 0;

  getNumberOfProducts() {
    return this.size;
  }

  getSum() {
    this.CalculateTax();
    return this.sum + this.tax;
  }

  getTax() {
    this.CalculateTax();
    return this.tax;
  }

  getSubtotal() {
    return this.sum;
  }

  private CalculateTax() {
    this.tax = this.taxRate * this.sum;
  }

}
