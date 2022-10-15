import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsCart: Product[] = []

  cartLength = 0
  total = 0

  constructor(private productsService: ProductsService) {
    this.productsCart = productsService.cart
    this.cartLength = this.productsCart.length
    this.calculateTotal()
  }

  ngOnInit(): void { }

  calculateTotal() {
    this.productsCart.forEach(p => {
      this.total += p.price
      console.log(this.total);
    })
  }
}
