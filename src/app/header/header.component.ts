import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge'; 
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MatMenu } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuContent } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { CarModel } from '../services/car';
import { Subscription } from 'rxjs';
import { CarServiceService } from '../services/car.service.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatBadgeModule, CommonModule, MatMenuContent, MatMenuItem, MatMenuTrigger, MatMenu],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [
    CurrencyPipe
  ]
})
export class HeaderComponent { 

  constructor(private cartService: CartService) { }

  basket: CarModel[] = [];

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => this.basket = cart);
  }

  getTotalPrice(): number {
    return this.basket.reduce((total, car) => total + car.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
  }
  
}
