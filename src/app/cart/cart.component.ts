

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { HttpCommunication, Product } from '../HttpCommunication';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private cartService: CartService, private orderService: OrderService, private prodService: HttpCommunication,private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cartProductIds = this.cartService.getCartItems();
    this.getListOfProducts();
    console.log(this.cartProducts);
    this.cdr.detectChanges();
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
        // alert(JSON.stringify(res))
        this.cartProducts = res.body ?? [];
       
      },
      error:e=>{
        alert(JSON.stringify(e));
      }
    });
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  removeFromCart(id: number){
    const index = this.cartProductIds.indexOf(id, 0);
    if (index > -1) {
      this.cartProductIds.splice(index, 1);
    }
    this.getListOfProducts();
    this.cdr.detectChanges();
  }

  }


