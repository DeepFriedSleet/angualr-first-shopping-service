import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from '../../../../reset.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  sum: number = 0;
  size: number = 0;
  discount: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private resetService: ResetService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sum = parseFloat(params['sum']) || 0;
      this.size = parseInt(params['size']) || 0;
      this.discount = parseFloat(params['discount']) || 0;
    });
  }

  getNumberOfProducts() {
    return this.size;
  }

  getTotal() {
    return this.sum;
  }

  getPromoValue() {
    return this.discount;
  }

  order(form: FormGroup) {
    alert('Thank you for your order! \n Your order Should arrive in 1-3 business days!');
    this.resetService.triggerReset();
    this.router.navigate(['cart']).then(() => {
      debugger;
      this.resetService.triggerReset();
    });
    this.goTo('/contact');
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
