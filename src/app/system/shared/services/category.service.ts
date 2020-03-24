import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Fruit } from '../../shared/models/fruit.model';
import { Vegetable } from '../../shared/models/vegetable.model';
import { Seedling } from '../../shared/models/seedling.model';

@Injectable({ providedIn: 'root' })

export class CategoryService {

  url = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}


  // get array
  getResults(category: string): Observable<any[]> {
    return this.http.get(`${this.url}/${category}`).pipe(
      map((categories: any[]) => categories.length > 0 ? categories : null)
    );
  }

  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(`${this.url}/fruit`, fruit, this.httpOptions);
  }

  addVegetable(vegetable: Vegetable): Observable<Vegetable> {
    return this.http.post<Vegetable>(`${this.url}/vegetable`, vegetable, this.httpOptions);
  }

  addSeedling(seedling: Seedling): Observable<Seedling> {
    return this.http.post<Seedling>(`${this.url}/seedling`, seedling, this.httpOptions);
  }

}
