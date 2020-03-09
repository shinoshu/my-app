import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '@my-app/auth/actions/auth-api.actions';

export const authFeatureKey = 'auth';

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess,
    (state, { data }) => ({ ...state, isLoggedIn: true })
  ),
  on(AuthActions.logoutSuccess,
    (state, { data }) => ({ ...state, isLoggedIn: false })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
