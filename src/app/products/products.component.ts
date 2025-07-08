import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../shared/Models/Product';
import { ProductsService } from './products.service';
import { searchFunction } from './product-filter/product-filter.component';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];
  @Output() search = '';
  @Output() filter: any;

  constructor(private store: ProductsService) {}

  searchFn = searchFunction;
    
  ngOnInit(): void {
      this.store.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  sorter: any;
}
