import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {User} from "../interfaces";

@Injectable({ providedIn: 'root' })

export class UsersService {

  constructor( private http: HttpClient ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  // get array of users from url and return user by email or null
  getById(userId: number): Observable<User> {
    return this.http.get<User>(`/api/users/${userId}`);
  }

  // new
  create(user: User) {
    return this.http.post<User>('/api/users', {user: user}, this.httpOptions);
  }

  update(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`/api/users/${userId}`, user, this.httpOptions);
  }

  updatePass(userId: number, pass: string): Observable<string> {
    return this.http.put<string>(`/api/users/passw/${userId}`,{password: pass}, this.httpOptions);
  }

  removeById(userId: number): Observable<any> {
    return this.http.delete<any>(`/api/users/${userId}`, this.httpOptions);
  }

}
