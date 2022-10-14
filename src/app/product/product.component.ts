import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../data/product.data';
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product?: Product
  cartProduct?: Product
  sub?: Subscription

  products:Product[] = []

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productsService.searchProduct(slug)
  }

  onAddCart() {
    if(this.product != null) {
      this.cartProduct = {id: this.product.id, name: this.product.name, category: this.product.category, slug: this.product.slug, description: this.product.description, image: this.product.image, price: this.product.price }
    }

    this.productsService.addToCart(this.cartProduct as Product)
  }
}
