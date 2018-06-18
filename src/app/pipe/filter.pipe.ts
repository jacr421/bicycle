import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/item.model';


@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform {
  transform(value: Item, type: string) {
    
  }
}