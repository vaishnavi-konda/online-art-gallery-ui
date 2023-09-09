

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { HttpCommunication, Product } from '../HttpCommunication';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductIds: number[] = []; 
  username: string = sessionStorage.getItem("username")?? '';
  cartProducts: Product[] =[];
  allProducts:Product[]=[];
  errors!:string;

  constructor(private cartService: CartService, private orderService: OrderService, private prodService: HttpCommunication) {}

  ngOnInit() {
    this.cartProductIds = this.cartService.getCartItems();
    this.getListOfProducts();
    console.log(this.cartProducts);
  }
  
  ngOnchanges(){
    //this.cartProductIds = this.cartService.getCartItems();
  }
  placeOrder(){
    this.orderService.placeOrder(this.username, this.cartProductIds);
  }
  
  getListOfProducts(){
    var result= this.prodService.getListOfProducts(this.cartProductIds);
    result.subscribe({
      next:res=>{  
        alert(JSON.stringify(res))
        this.cartProducts = res.body ?? [];
       
      },
      error:e=>{
        alert(JSON.stringify(e));
      }
    });
  }
  }


