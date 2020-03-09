import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[AuthApi] Login'
);

export const loginSuccess = createAction(
  '[AuthApi] Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[AuthApi] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[AuthApi] Logout'
);

export const logoutSuccess = createAction(
  '[AuthApi] Logout Success',
  props<{ data: any }>()
);

export const logoutFailure = createAction(
  '[AuthApi] Logout Failure',
  props<{ error: any }>()
);
