import { Component, Input, Output } from '@angular/core';
import { Product } from '../../../../shared/Models/Product';

@Component({
  selector: 'app-productslist',
  standalone: false,
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  @Input() products: Product[] = [];

  constructor() {}
}
