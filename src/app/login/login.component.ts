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
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit() {
    this.message = new Message('danger', '');
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

    this.route.queryParams.subscribe((params: Params) => {
      setTimeout(() => {
        this.message.text = params['text'];
        this.message.type = 'success';
      }, 5000);
    });

  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if ( user.password === formData.password) {
            this.showMessage('');
            this.authService.login(user);
            this.router.navigate(
              ['/system', 'buh', 'bill']
            );
          } else {
            this.showMessage('Пароль не верный');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        } 
      });
  }

}
