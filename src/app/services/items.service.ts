import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

  items = [
    {name: 'Bread', amount: '500 g', star: false},
    {name: 'Milk', amount: '1.5 L', star: true},
    {name: 'Eggs', amount: '6 stk.', star: false}
  ];

  getItems(){
    return this.items;
  }

}
