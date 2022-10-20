import { Injectable } from '@angular/core';
import { Product } from './data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[] = [
    {id:"001", name:"Flannel Stand Collar Shirt", category:"clothing", slug:"flannel-stand-collar-shirt", description:"A flannel stand collar shirt that you'll want to wear when the morning and evening air feels cool.", image:"flannel-stand-collar-shirt.jpg", price:39.90},
    {id:"002", name:"Labo Wool Cardigan", category:"clothing", slug:"labo-wool-cardigan", description:"A soft wool cardigan with ample room that will keep you warm and comfortable.", image:"labo-wool-cardigan.jpg", price:79.90},
    {id:"003", name:"Labo Wool Knit Vest", category:"clothing", slug:"labo-wool-knitvest", description:"A soft wool sweater vest with ample room that will keep you warm and stylish.", image:"labo-wool-knitvest.jpg", price:69.90},
    {id:"004", name:"Labo Wool Sweater", category:"clothing", slug:"labo-wool-sweater", description:"Warm and comfortable wool sweater with a loose fit.", image:"labo-wool-sweater.jpg", price:79.90},
    {id:"005", name:"Water Repellent Down Jacket", category:"clothing", slug:"water-repellent-down-jacket", description:"Water repellent down jacket made with recycled polyester. Easily brush off water droplets from the smooth lining of the fabric.", image:"water-repellent-down-jacket.jpg", price:159.90},

    {id:"006", name:"Body Fit Cushion", category:"home", slug:"body-fit-cushion", description:"Its squared-off shape offers greater support by cushioning where it’s needed most.", image:"body-fit-cushion.jpg", price:149.00},
    {id:"007", name:"Cotton Triple Cover", category:"home", slug:"cotton-triple-cover", description:"Cotton Triple Gauze uses soft gauze that has been woven into three layers, and traps air, giving it a gentle texture.", image:"cotton-triple-cover.jpg", price:55.00},
    {id:"008", name:"Linen Plain Cover", category:"home", slug:"linen-plain-cover", description:"A duvet cover made of 100% linen that stays cool and gets softer with use. ", image:"linen-plain-cover.jpg", price:99.90},
    {id:"009", name:"Living Dining Bench", category:"home", slug:"living-dining-bench", description:"A long bench that is part of the Living Dining Series", image:"living-dining-bench.jpg", price:399.00},
    {id:"010", name:"Living Dining Table", category:"home", slug:"living-dining-table", description:"Dining table that's simply designed for everyday use. ", image:"living-dining-table.jpg", price:599.90},

    {id:"011", name:"Pack Notebook Set", category:"stationary", slug:"pack-notebook-set", description:"A 5 piece set of notebooks in B5 size for note taking. ", image:"pack-notebook-set.jpg", price:2.99},
    {id:"012", name:"Planting Tree Notebook", category:"stationary", slug:"planting-tree-notebook", description:"Plantation Paper.", image:"planting-tree-notebook.jpg", price:1.90},
    {id:"013", name:"Recycled Paper Notebook", category:"stationary", slug:"recycled-paper-notebook", description:"Spiral notebook that's filled with plain paper that can be used for note taking, planning, sketching, and many more.", image:"recycled-paper-notebook.jpg", price:1.90},
    {id:"014", name:"Recycled Paper Planner", category:"stationary", slug:"recycled-paper-planner", description:"Recycled Paper 100%.", image:"recycled-paper-planner.jpg", price:0.90},
    {id:"015", name:"Recycled Paper Pocket Notebook", category:"stationary", slug:"recycled-paper-pcocket-notebook", description:"A simple notebook made with the same bookbinding.", image:"recycled-paper-pocket-notebook.jpg", price:2.90},
  ]

  private _cart: Product[] = []

  constructor() {
  }

  addToCart(product: Product) {
    this._cart.push(product)
  }

  removeFromCart(product: Product) {
    this._cart = this._cart.filter(p => p !== product)
  }

  searchProduct(slug: string) {
    return this._products.find(p => p.slug === slug)
  }

  get products() {
    return [...this._products]
  }

  get cart() {
    return [...this._cart]
  }

}
