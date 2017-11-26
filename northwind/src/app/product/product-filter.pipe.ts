import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase():null;
    
    return filterText ? value.filter((a:Product)=>a.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}