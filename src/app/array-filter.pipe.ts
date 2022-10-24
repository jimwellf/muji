import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any[], value: string, key: string): any[] {
    if(value === "") return array
    return array.filter(p => p.name.toLowerCase().indexOf(value.toLocaleLowerCase()) != -1)
  }

}
