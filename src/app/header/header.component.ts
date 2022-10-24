import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../data/product.data';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = ""

  products:Product[] = []

  constructor(private productsService: ProductsService, private router: Router) {
    this.products = productsService.products
    }

  ngOnInit(): void { }

  onGoProduct(productCategory: string, productSlug: string) {
    this.router.navigate(["/" + productCategory + "/" + productSlug])
  }

}
