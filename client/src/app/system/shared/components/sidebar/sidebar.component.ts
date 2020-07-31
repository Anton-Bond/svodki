import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dir = '';
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user.email === 'dispetcher@test.by') {
      this.dir='results';
    } else {
      this.dir='inputs';
    }

  }

}
