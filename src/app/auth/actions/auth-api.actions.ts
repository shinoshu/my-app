import { createAction, props } from '@ngrx/store';

export const loadAuthApis = createAction(
  '[AuthApi] Load AuthApis'
);

export const loadAuthApisSuccess = createAction(
  '[AuthApi] Load AuthApis Success',
  props<{ data: any }>()
);

export const loadAuthApisFailure = createAction(
  '[AuthApi] Load AuthApis Failure',
  props<{ error: any }>()
);
