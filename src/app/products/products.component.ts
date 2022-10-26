import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  product?: Product
  products:Product[] = []


  productCategory: string

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) {
    this.products = productsService.products
    this.productCategory = this.route.snapshot.paramMap.get('category') as string
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
