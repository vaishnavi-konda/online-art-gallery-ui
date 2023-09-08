import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  url = "http://localhost:5240";
  constructor(private client:HttpClient) { }

  placeOrder(username: string, cartItems: number[]){
    const orderData = {
      userId: username,
      orderDetails: cartItems,
    };

    const orderurl = `${this.url}/placeOrder`;
    const head=new HttpHeaders({'content-type':'application/json'});
    var result=this.client.post(orderurl, orderData, {headers:head,observe:'response'});
    return result;
  }
}
