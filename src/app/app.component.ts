import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'router-app';
  goTo(route : string) {
    this.router.navigate([route]);
  }
}
