import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from "../models/user.model";

@Injectable({ providedIn: 'root' })

export class UsersService {

  url = `http://localhost:3000`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}


  // get array of users from url and return user by email or null
  getUserByEmail(email: string): Observable<User> {  
    return this.http.get(`${this.url}/users?email=${email}`).pipe(
      map((users: User[]) => users[0] ? users[0] : null)
    );
  }

}