import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  userName: String = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    try {
      this.userName = jwt_decode(localStorage.getItem('auth-token')).name;
    }
    catch(err){
      console.log(err);
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
