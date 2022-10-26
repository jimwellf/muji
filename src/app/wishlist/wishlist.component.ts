import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products: Product[] = []

  constructor(private productsService: ProductsService) {
    this.products = productsService.wish
  }

  ngOnInit(): void {}

  onAddCart(product: Product) {
    this.productsService.addToCart(product)
  }
}
