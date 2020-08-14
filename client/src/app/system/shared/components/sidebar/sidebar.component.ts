import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  dir: string = '';
  isAdmin: boolean = false;
  role: string = 'viewer';

  ngOnInit() {
    this.role = this.authService.role();
    this.isAdmin = this.authService.role() === 'svadmin';

    if (this.isAdmin) {
      this.dir='results';
    } else if (this.role === 'region') {
      this.dir='inputs';
    } else {
      this.role = 'viewer';
    }

  }

}
