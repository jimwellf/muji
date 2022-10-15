import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';

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

  ngOnInit(): void {
  }

}
