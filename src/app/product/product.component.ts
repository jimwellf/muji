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
  sub?: Subscription

  products:Product[] = []

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productsService.searchProduct(slug)

    this.sub = route.params.subscribe( params => {
      const { slug } = params
      this.product = productsService.searchProduct(slug)
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  onAddWish() {
    if(this.product != null) {
      this.productsService.addToWish(this.product)
      console.log(this.productsService.wish)
    }
  }

  onAddCart() {
    if(this.product != null) {
      this.productsService.addToCart(this.product)
      console.log(this.productsService.cart)
    }
  }
}
