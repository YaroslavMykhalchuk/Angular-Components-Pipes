import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleLetter'
})
export class DoubleLetterPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').map(char => char + char).join('');
  }

}
