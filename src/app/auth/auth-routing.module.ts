import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '@my-app/auth/containers/login-page/login-page.component';
import { SignupPageComponent } from '@my-app/auth/containers/signup-page/signup-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: { title: 'Login' },
  },
  {
    path: 'signup',
    component: SignupPageComponent,
    data: { title: 'Signup' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
