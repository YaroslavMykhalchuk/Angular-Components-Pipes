import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneNumber'
})
export class TelephoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    return `(${value.substring(0, 3)}) ${value.substring(3, 5)} - ${value.substring(5, 7)} - ${value.substring(7)}`;
  }
}
