import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxAuthFirebaseUIModule,
  ]
})
export class AuthModule { }
