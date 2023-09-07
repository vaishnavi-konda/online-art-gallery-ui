import { Component } from '@angular/core';
import { AbstractHttpCommunication, Product } from '../HttpCommunication';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[];
  errors!:string;

  constructor(private service:AbstractHttpCommunication,private cartService: CartService) {

  }

  ngOnInit() {this.getProducts();}

  getProducts():void {
    let observable = this.service.GetProducts();
    observable.subscribe({
      next: result =>{ 
        this.products = result;
        var p=10;
      },
      error: err => this.errors = err
    })

    
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
