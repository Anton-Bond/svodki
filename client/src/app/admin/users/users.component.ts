import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/interfaces';
import { ROLES } from '../../shared/roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  isLoaded = false;
  users: User[] = [];

  ngOnInit() {
    this.usersService.getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users.filter(u => u.role !== 'svadmin');
        this.isLoaded = true;
      })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['deleteSuccess']) {
        alert('Пользователь был успешно удален');
      }
    })
  }

  getReadabilityRole(role: string) {
    return ROLES.find(R => R.type === role).name;
  }

}
