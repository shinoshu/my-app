import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { selectUser } from '@my-app/users/actions/user.actions';
import { addUsersApis } from '@my-app/users/actions/users-api.actions';
import * as fromUsers from '@my-app/users/reducers/index';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.scss']
})
export class UserFormPageComponent implements OnDestroy {
  form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });

  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUsers.State>,
    private route: ActivatedRoute,
  ) {
    this.subscription = this.route.params
      .pipe(map(params => selectUser({ id: params.id })))
      .subscribe(action => store.dispatch(action));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch(addUsersApis(this.form.value));
  }
}
