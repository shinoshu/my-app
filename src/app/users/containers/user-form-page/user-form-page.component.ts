import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { addUsersApis } from '@my-app/users/actions/users-api.actions';
import * as fromUsers from '@my-app/users/reducers/index';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.scss']
})
export class UserFormPageComponent {
  form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUsers.State>,
  ) { }

  onSubmit() {
    this.store.dispatch(addUsersApis(this.form.value));
  }
}
