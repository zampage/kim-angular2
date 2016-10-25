import { Component, Input } from '@angular/core';
import {RecipesService} from "../shared/services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipes = [];
  @Input() onlyStars = false;

  constructor(private rs : RecipesService) {

  }

  ngOnInit(){
    this.rs.getRecipeApi().subscribe(
      data => this.recipes = data
    );
  }

  toggleStar(recipe){
    recipe.star = !recipe.star;
    this.updateStar(recipe);
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

  updateStar(recipe){
    this.rs.updateRecipe(recipe.id, recipe.name, recipe.items, recipe.instructions, recipe.star).subscribe();
  }

}
