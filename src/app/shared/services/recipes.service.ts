import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipesService {

  baseUrl = 'http://localhost/kim-angular2-api';

  constructor(private http : Http){

  }

  getRecipeApi(){
    return this.http
      .get(this.baseUrl + '/recipes')
      .map((response : Response) => response.json())
      .catch((error) => Observable.throw(error.toJSON().error || '[Server Error]'));
  }

  updateRecipe(id, name, items, instructions, star){
    return this.http
      .put(this.baseUrl + '/recipe/' + id, {
        name: name,
        items: items,
        instructions: instructions,
        star: star
      })
  }

}
