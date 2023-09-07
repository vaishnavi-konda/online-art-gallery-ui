import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AbstractHttpCommunication, HttpCommunication } from './HttpCommunication';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { OperationsComponent } from './operations/operations.component';
// import { SecuriyComponent } from './securiy/securiy.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component'; // for 2 way binding
// import { TempformComponent } from './tempform/tempform.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     EmpComponent,
//     OperationsComponent,
//     SecuriyComponent,
//     ReactiveformComponent,
//     TempformComponent
//   ],
//   imports: [
//     HttpClientModule,
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication}],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
