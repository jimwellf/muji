import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product.data';
import { User } from '../data/users.data';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(private productsService: ProductsService) {
    this.products = productsService.products
  }

  ngOnInit(): void { }

  onAddWish(product?: Product) {
    this.productsService.addToWish(product as Product)
    console.log(this.productsService.wish)
  }

  onAddCart(product?: Product) {
    this.productsService.addToCart(product as Product)
    console.log(this.productsService.cart)
  }

}
