import { createAction, props } from '@ngrx/store';

export const loadUsersApis = createAction(
  '[UsersApi] Load UsersApis'
);

export const loadUsersApisSuccess = createAction(
  '[UsersApi] Load UsersApis Success',
  props<{ data: any }>()
);

export const loadUsersApisFailure = createAction(
  '[UsersApi] Load UsersApis Failure',
  props<{ error: any }>()
);
