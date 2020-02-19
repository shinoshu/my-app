import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromUsers from '@my-app/user/reducers/user.reducer';
import * as fromRoot from '@my-app/reducers';

export const usersFeatureKey = 'users';

export interface UsersState {
  [fromUsers.usersFeatureKey]: fromUsers.State;
}

export interface State extends fromRoot.State {
  [fromUsers.usersFeatureKey]: UsersState;
}

export function reducers(state: UsersState | undefined, action: Action) {
  return combineReducers({
    [fromUsers.usersFeatureKey]: fromUsers.reducer,
  })(state, action);
}
