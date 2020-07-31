import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    //window.localStorage.removeItem('user');
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return window.localStorage.getItem('user') !== null;
  }

}
