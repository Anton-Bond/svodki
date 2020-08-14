import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import { User } from '../../shared/interfaces';
import { UsersService } from '../../shared/services/users.service';
import { ROLES } from '../../shared/roles';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  isLoaded: boolean = false;
  form: FormGroup;
  user: User;
  roles = ROLES;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    })

    this.form.disable();

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              return this.usersService.getById(params['id'])
            }
            return of(null)
          }
        )
      )
      .subscribe(
        (user: User) => {
          if (user) {
            this.user = user;
            this.form.patchValue({
              name: user.name,
              email: user.email,
              role: user.role
            })
          }

          this.form.enable();
          this.isLoaded = true;
        },
        error => alert(error.error.message)
      )
  }

  // remove product from DB
  removeById() {
    this.usersService.removeById(this.user.id)
      .subscribe(() => this.router.navigate(['/svadmin'], {
        queryParams: {
          deleteSuccess: true
        }
      }));
  }

  onSubmit() {
    this.form.disable();
    this.usersService.update(this.user.id, this.form.value)
      .subscribe(() => alert('Изменения сохранены.'));
    this.form.enable();
  }

}
