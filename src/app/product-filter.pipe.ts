import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './data/product.data';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): any {
    return products.filter(p => p.category === category)
  }
}
