import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ItemsService {

  baseUrl = 'http://localhost/kim-angular2-api';

  constructor(private http : Http){

  }

  getItemApi() : Observable<any>{
    return this.http
      .get(this.baseUrl + '/inventory')
      .map((response : Response) => response.json())
      .catch((error) => Observable.throw(error.toJSON().error || '[Server Error]'));
  }

  updateItem(id : string, newName, newAmount, newMeasurement, newStar) : Observable<any>{
    return this.http
      .put(this.baseUrl + '/item/' + id, {
        name: newName,
        amount: newAmount,
        measurement: newMeasurement,
        star: newStar
      });
  }

}
