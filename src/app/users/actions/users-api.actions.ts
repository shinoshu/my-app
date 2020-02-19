import { createAction, props } from '@ngrx/store';

import { User } from '@my-app/users/models/user.model';

export const loadUsersApis = createAction(
  '[UsersApi] Load UsersApis'
);

export const loadUsersApisSuccess = createAction(
  '[UsersApi] Load UsersApis Success',
  props<{ users: User[] }>()
);

export const loadUsersApisFailure = createAction(
  '[UsersApi] Load UsersApis Failure',
  props<{ error: any }>()
);
