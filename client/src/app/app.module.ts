import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';
import { AdminModule } from './admin/admin.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
// import { DropdownDirective } from './system/shared/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundPageComponent,
    // DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SystemModule,
    AdminModule,
    AppRoutingModule  // can be last
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
