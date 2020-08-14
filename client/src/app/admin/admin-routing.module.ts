import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPasswComponent } from './user-page/user-passw/user-passw.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'svadmin', component: AdminComponent, children: [
    { path: '',  redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserPageComponent },
    { path: 'users/passw/:id/:name', component: UserPasswComponent },
    { path: 'users/add/new', component: AddUserComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
