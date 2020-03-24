import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class CategoryService {

  url = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}


  // get array of users from url and return user by email or null
  getResults(category: string): Observable<any[]> {
    return this.http.get(`${this.url}/${category}`).pipe(
      map((Categories: any[]) => Categories)
    );
  }

}
