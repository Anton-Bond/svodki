import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";

import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  isAdmn(): boolean {
    return this.getDecodedAccessToken(localStorage.getItem('auth-token')).role === 'svadmin';
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }

  //
  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  role(): string {
    return this.getDecodedAccessToken(localStorage.getItem('auth-token')).role;
  }

  // get route after login to app
  route(): string {
    return this.getDecodedAccessToken(this.token).role;
  }


}
