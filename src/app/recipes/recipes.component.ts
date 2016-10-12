import { Component, Input } from '@angular/core';
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipes;
  @Input() onlyStars = false;

  constructor(rs : RecipesService) {
    this.recipes = rs.getRecips();
  }

  toggleStar(recipe){
    recipe.star = !recipe.star;
  }

  recipesHaveStars(){
    var answer = false;
    this.recipes.forEach(function(recipe){
      if(recipe.star){
        answer = true;
      }
    });
    return answer;
  }

}
