import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AbstractHttpCommunication, HttpCommunication } from './HttpCommunication';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AbstractSecurityCommunication, LoginService } from './services/login.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    UserDashboardComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication},
  {provide:AbstractSecurityCommunication,useClass:LoginService},
  // {provide:CartService,useClass:CartService},
  {provide:OrderService,useClass:OrderService}
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
