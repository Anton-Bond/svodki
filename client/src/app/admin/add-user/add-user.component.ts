import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { ROLES } from '../../shared/roles';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  form: FormGroup;
  roles = ROLES;

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repeatPassword: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    this.form.disable()

    this.usersService.create(this.form.value)
      .subscribe(() =>  {
        this.router.navigate(['/svadmin']);
        alert('Изменения сохранены.');
      }
    );

    this.form.enable();
  }
}
