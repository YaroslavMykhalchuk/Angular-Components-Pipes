import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDublicate'
})
export class RemoveDublicatePipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== value[i + 1]) {
        result += value[i];
      }
    }
    return result;
  }

}
