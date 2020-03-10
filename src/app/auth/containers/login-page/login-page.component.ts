import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { loginSuccess } from '@my-app/auth/actions/auth-api.actions';
import * as fromAuth from '@my-app/auth/reducers/index';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private store: Store<fromAuth.State>,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginSuccess(data: any) {
    this.store.dispatch(loginSuccess());
    this.router.navigate(['/users']);
  }
}
