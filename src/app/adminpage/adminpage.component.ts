import { Component } from '@angular/core';
import { AbstractAdminCommunication } from '../services/admin.service';
import { Product } from '../HttpCommunication';
import { AbstractHttpCommunication } from '../HttpCommunication';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  p!:Product;
  errors!:string;
  //button_clicked:boolean=false;
  productId: number=0;
  productIds!:number[]
  constructor(private service: AbstractAdminCommunication) {}
  productById(): void {    
    let observable = this.service.ProductById(this.productId);
    observable.subscribe({
      next: (result:any) => {
        this.p=result;

      },
      error: (err) => (this.errors = err.message),
    });
    //this.button_clicked=true;
  }

  
  producstByIds(): void {    
    let observable = this.service.ProductsByIds(this.productIds);
    observable.subscribe({
      next: (result:any) => {
        this.p=result;

      },
      error: (err) => (this.errors = err.message),
    });
    //this.button_clicked=true;
  }
}
