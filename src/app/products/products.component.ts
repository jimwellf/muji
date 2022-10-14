import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  keyword = 'name';
  search = ""

  products:Product[] = []

  constructor(private productsService: ProductsService, private router: Router) {
    this.products = productsService.products
   }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.search)
  }
}
