import { Injectable } from '@angular/core';
import {ItemsService} from "./items.service";

@Injectable()
export class RecipesService {

  recipes = [];

  constructor(is : ItemsService){

    var items = is.getItems();
    this.recipes = [
      {name: 'Spaghetti Carbonara', items: [
        {id: items[1], amount: '0.3 L'},
        {id: items[2], amount: '1 pc.'}
      ], instructions: [
        "Do Stuff",
        "And the do more stuff!"
      ], star: true}
    ];

  }

  getRecips(){
    return this.recipes;
  }

}
