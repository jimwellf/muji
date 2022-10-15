import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  checkOutForm: FormGroup

  constructor(private productsService: ProductsService) {
    this.productsCart = productsService.cart
    this.cartLength = this.productsCart.length
    this.calculateTotal()

    this.checkOutForm = new FormGroup({
      "firstName": new FormControl(null, Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "username": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void { }

  calculateTotal() {
    this.productsCart.forEach(p => {
      this.total += p.price
      console.log(this.total);
    })
  }
}
