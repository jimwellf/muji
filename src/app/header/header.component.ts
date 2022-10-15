import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = 'name';
  search = ""
  @ViewChild('searchbar') searchbar: any

  products:Product[] = []

  constructor(private productsService: ProductsService, private router: Router) {
    this.products = productsService.products
   }

  ngOnInit(): void { }

}
