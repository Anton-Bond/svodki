import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SystemModule } from '../system/system.module';
import { UsersComponent } from './users/users.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserPasswComponent } from './user-page/user-passw/user-passw.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    UserPageComponent,
    AddUserComponent,
    UserPasswComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SystemModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
