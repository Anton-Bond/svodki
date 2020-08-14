import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Subscription} from 'rxjs';

import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';
import { Message } from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  message: Message;
  aSub: Subscription;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.message = new Message('danger', '');
    // this.message = Object.assign({}, {
    //   type: 'danger',
    //   text: ''
    // })
    this.message = {
      type: 'danger',
      text: ''
    }
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    })

    this.route.queryParams.subscribe((params: Params) => {
      setTimeout(() => {
        this.message.text = params['text'];
        this.message.type = 'success';
      }, 5000);
    });

  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  private showMessage(text: string, type: string = 'danger') {
    // this.message = new Message(type, text);
    this.message = {type, text};
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.authService.login(this.form.value).subscribe(
      () => {
        const route: string = this.authService.route();
        if (route === 'svadmin') {
          this.router.navigate([`/${route}`]);
        } else {
          this.router.navigate([`/system/${route}`]);
        }
      }, error => {
        this.showMessage(error.error.message);
        this.form.enable();
      }
    );
  }

}
