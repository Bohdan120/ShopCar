import { Injectable } from '@angular/core';
import { CarModel } from './car';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CarModel[] = [];
  private cartSubject = new BehaviorSubject<CarModel[]>(this.cart);

  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(car: CarModel) {
    this.cart.push(car);
    this.cartSubject.next(this.cart);  
  }

  removeFromCart(car: CarModel) {
    const index = this.cart.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
    }
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }



}
