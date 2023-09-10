import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    let username = sessionStorage.getItem("username") ?? '';
    this.orderService.getOrdersByUsername(username).subscribe(
      (data: any) => {
        this.orders = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
