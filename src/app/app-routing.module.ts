import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { CheckoutComponent } from './products/productslist/cart/checkout/checkout.component';
import { CartComponent } from './products/productslist/cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'check-out', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
