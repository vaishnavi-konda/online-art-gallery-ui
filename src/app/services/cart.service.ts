import { Injectable } from '@angular/core';
import { Product } from '../HttpCommunication';
import { HttpCommunication } from '../HttpCommunication';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: number[] = [];
  cartProducts: Product[] =[];

  constructor() {}

  addToCart(item: number) {
    this.cartItems.push(item);
  }

  removeFromCart(itemIndex: number) {
    this.cartItems.splice(itemIndex, 1);
  }

  getCartItems() {
    return this.cartItems;
  }
}
