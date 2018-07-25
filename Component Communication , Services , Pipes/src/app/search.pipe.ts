import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any, term: string, propName: string): any {
    if (term === '' || !term) {
      return arr;
    }
    let resultArr = [];
    for (let item of arr) {
      if (item[propName].toString().toLowerCase().includes(term.toLowerCase())) {
        resultArr.push(item);
      }
    }
    return resultArr;

  }

}
