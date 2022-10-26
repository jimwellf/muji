import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"catalog", component: CatalogComponent},

  {path:"cart", component: CartComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"wishlist", component: WishlistComponent},

  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},

  {path:"coming-soon", component: HomeComponent},

  {path:":category", component: ProductsComponent},
  {path:":category/:slug", component: ProductComponent},

  {path:"page-not-found", component: PagenotfoundComponent},
  {path:"**", redirectTo: "page-not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
