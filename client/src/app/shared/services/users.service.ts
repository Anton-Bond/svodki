import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";

import {User} from "../models/user.model";

@Injectable({ providedIn: 'root' })

export class UsersService {

  constructor( private http: HttpClient ) {}

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  // get route after login to app
  route(token: string): string {
    return this.getDecodedAccessToken(token).role;
  }


  // get array of users from url and return user by email or null
  // getUserByEmail(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.urlServer}/auth/login`, user).pipe(
  //     map((user: User) => {
  //       console.log(user);
  //       return user ? user : null;
  //     })
  //   );
  // }

}
