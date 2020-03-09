import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import * as fromAuth from '@my-app/auth/reducers';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    AuthRoutingModule,
    NgxAuthFirebaseUIModule,
  ]
})
export class AuthModule { }
