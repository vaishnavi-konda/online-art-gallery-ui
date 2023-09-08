import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];

  constructor() {}

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  removeFromCart(itemIndex: number) {
    this.cartItems.splice(itemIndex, 1);
  }

  getCartItems() {
    return this.cartItems;
  }
}
