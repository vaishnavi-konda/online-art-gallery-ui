import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component'; 
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'userlogin', component:UserDashboardComponent},
  {path:'cart', component:CartComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
