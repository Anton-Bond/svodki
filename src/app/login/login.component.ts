import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { AuthService } from '../shared/services/auth.service';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message = new Message();

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),    
    })

    this.message.type = 'danger';
    this.message.text = '';

    this.route.queryParams.subscribe((params: Params) => {
      setTimeout(() => {
        this.message.text = params['text'];
        this.message.type = 'success';
      }, 5000);
    });

  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (!user || user.password !== formData.password) {
            this.message.type = 'danger';
            this.message.text = 'Такого пользователя не существует';
        } else {
          this.authService.login(user);
          console.log(this.form);
          // this.router.navigate(
          //   ['/system', 'sidebar']
          // );
        }
      });
  }

}
