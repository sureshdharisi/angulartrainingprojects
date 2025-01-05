import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customsort',
  pure: false // This will not cache the returned object
})
export class CustomsortPipe implements PipeTransform {
  transform(value: number[] | string[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];

    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }
}
