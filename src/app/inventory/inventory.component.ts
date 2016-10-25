import { Component, Input } from '@angular/core';
import {ItemsService} from "../shared/services/items.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  items = [];
  @Input() onlyStars = false;

  constructor(private is : ItemsService) {

  }

  ngOnInit(){
    this.getAllItems();
  }

  getAllItems(){
    this.is.getItemApi().subscribe(
      data => this.items = data,
      error => console.log('Server Error')
    );
  }

  toggleStar(item){
    item.star = !item.star;
  }

  itemsHaveStars(){
    var answer = false;
    this.items.forEach(function(item){
      if(item.star){
        answer = true;
      }
    });
    return answer;
  }

}
