import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromUsers from '@my-app/users/reducers/user.reducer';
import * as fromUsersApi from '@my-app/users/reducers/users-api.reducer';
import * as fromRoot from '@my-app/reducers';

export const usersFeatureKey = 'users';

export interface UsersState {
  [fromUsers.usersFeatureKey]: fromUsers.State;
  [fromUsersApi.usersApiFeatureKey]: fromUsersApi.State;
}

export interface State extends fromRoot.State {
  [usersFeatureKey]: UsersState;
}

export function reducers(state: UsersState | undefined, action: Action) {
  return combineReducers({
    [fromUsers.usersFeatureKey]: fromUsers.reducer,
    [fromUsersApi.usersApiFeatureKey]: fromUsersApi.reducer,
  })(state, action);
}

export const selectUsersState = createFeatureSelector<State, UsersState>(
  usersFeatureKey
);

export const selectUserEntitiesState = createSelector(
  selectUsersState,
  state => state.users
);

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal,
} = fromUsers.adapter.getSelectors(selectUserEntitiesState);

export const selectCurrentUserId = createSelector(
  selectUserEntitiesState,
  fromUsers.selectId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userId && userEntities[userId]
);
