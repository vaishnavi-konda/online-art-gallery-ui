import { Component } from '@angular/core';
import { AbstractHttpCommunication, Product } from '../HttpCommunication';
import { CartService } from '../services/cart.service';




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


  addToCart(product: Product) {
    this.cartService.addToCart(product.productId);
  }

  selectedCategory: string ='';
  getProductsByCategory() {
    if (this.selectedCategory === 'all') {
      // If "All" is selected, fetch all products
      this.getProducts();
      
    } else {
      // Fetch products by the selected category
      this.service.getProductsByCategory(this.selectedCategory).subscribe((data) => {
        this.products = data;
      });
    }
  }


}
