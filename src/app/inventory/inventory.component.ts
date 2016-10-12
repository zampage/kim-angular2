import { Component, Input } from '@angular/core';
import {ItemsService} from "../services/items.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  items;
  @Input() onlyStars = false;

  constructor(is : ItemsService) {
    this.items = is.getItems();
  }

  toggleStar(item){
    item.star = !item.star;
  }

}
