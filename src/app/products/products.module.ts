import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CheckoutComponent } from './productslist/cart/checkout/checkout.component';
import { CartComponent } from './productslist/cart/cart.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './productslist/cart/cart-summary/cartsummary.component';
import { AddToCartComponent } from './productslist/cart/add-to-cart/add-to-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './productslist/cart/order-summary/order-summary.component';
import { TotalsComponent } from './productslist/cart/checkout/totals/totals.component';
import { CheckOutFormComponent } from './productslist/cart/checkout/check-out-form/check-out-form.component';
import { CartListComponent } from './productslist/cart/cart-list/cart-list.component';



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductdetailsComponent,
    ProductFilterComponent,
    CheckoutComponent,
    CartComponent,
    ProductsComponent,
    CartSummaryComponent,
    AddToCartComponent,
    OrderSummaryComponent,
    TotalsComponent,
    CheckOutFormComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
