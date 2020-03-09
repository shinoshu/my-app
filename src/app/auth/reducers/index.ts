import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromAuth from '@my-app/auth/reducers/auth.reducer';
import * as fromRoot from '@my-app/reducers';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.authFeatureKey]: fromAuth.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

// TODO
export const selectAuthStatusState = createSelector(
  selectAuthState,
  state => state.auth
);

export const selectLoggedIn = createSelector(selectAuthStatusState, state => state.isLoggedIn);
