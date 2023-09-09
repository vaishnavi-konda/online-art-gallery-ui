import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  
  url = "http://localhost:5099"; 

  constructor(private http: HttpClient) {}

  placeOrder(order: any, orderDetails: any[]): Observable<any> {
    // Make an HTTP POST request to create the order and order details
    const orderData = { order, orderDetails };
    return this.http.post(`${this.url}/placeOrder`, orderData);
  }

  // Add methods to update order details as needed
}

