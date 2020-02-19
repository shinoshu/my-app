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

export const addUsersApis = createAction(
  '[UsersApi] Add UsersApis',
  props<{ user: User }>()
);

export const addUsersApisSuccess = createAction(
  '[UsersApi] Add UsersApis Success'
);

export const addUsersApisFailure = createAction(
  '[UsersApi] Add UsersApis Failure',
  props<{ error: any }>()
);

export const deleteUsersApis = createAction(
  '[UsersApi] Delete UsersApis',
  props<{ id: string }>()
);

export const deleteUsersApisSuccess = createAction(
  '[UsersApi] Delete UsersApis Success'
);

export const deleteUsersApisFailure = createAction(
  '[UsersApi] Delete UsersApis Failure',
  props<{ error: any }>()
);
