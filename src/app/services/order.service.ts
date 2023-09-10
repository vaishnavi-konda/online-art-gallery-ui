import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private baseUrl = 'http://localhost:5240'; 

  constructor(private client: HttpClient) { }

  getOrdersByUsername(username: string) {
    const url = `${this.baseUrl}/orders/${username}`;
    return this.client.get(url);
  }

    placeOrder(username: string, cartItems: number[]){
    const orderData = {
      userId: username,
      orderDetails: cartItems,
    };

    const orderurl = `${this.baseUrl}/placeOrder`;
    const head=new HttpHeaders({'content-type':'application/json'});
    var result=this.client.post(orderurl, orderData, {headers:head,observe:'response'});
    alert("Order Placed");
    return result;
  }
}
