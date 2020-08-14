import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// import { User } from '../../shared/interfaces';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-user-passw',
  templateUrl: './user-passw.component.html',
  styleUrls: ['./user-passw.component.css']
})
export class UserPasswComponent implements OnInit {


  form: FormGroup;
  userId: number = null;
  name: String = '';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(null, Validators.required),
      repeatPassword: new FormControl(null, Validators.required),
    })

    this.userId = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];

    // console.log(this.route);
    // this.route.queryParams.subscribe((params: Params) => {
    //   console.log(params);
    //   if (params['id'] && params['name']) {
    //     this.userId = params['id'];
    //     this.name = params['name'];
    //   } else {
    //     alert('Something went wrong!')
    //   }
    // });

  }

  onSubmit() {
    this.form.disable();
    this.usersService.updatePass(this.userId, this.form.get('password').value)
      .subscribe(() => alert('Пароль успешно изменен'));
    this.form.enable();
  }
}
