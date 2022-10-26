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
    console.log(this.productCategory);


    // if(this.productCategory === "page-not-found") {
    //   router.navigate(["/page-not-found"])
    // }
   }

   ngOnInit(): void { }
}
