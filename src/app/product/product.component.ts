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
export class ProductComponent implements OnInit, OnDestroy {

  product?: Product
  sub?: Subscription

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}
