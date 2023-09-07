import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'products', component:ProductsComponent},
    {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
