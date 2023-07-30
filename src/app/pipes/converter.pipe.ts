import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(price: number, currency: string, exchangeRate: number): string {
    const convertedPrice = (price / exchangeRate).toFixed(2);
    return `${convertedPrice} ${currency}`;
  }
}
