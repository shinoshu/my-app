import { Action, createReducer, on } from '@ngrx/store';
import {
  loadUsersApis,
  loadUsersApisSuccess,
  loadUsersApisFailure,
} from '@my-app/users/actions/users-api.actions';

export const usersApiFeatureKey = 'usersApi';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

const usersApiReducer = createReducer(
  initialState,
  on(loadUsersApis, state => ({
    ...state,
    loading: true,
  })),
  on(loadUsersApisSuccess, (state, { users }) => ({
    loaded: true,
    loading: false,
    ids: users.map(user => user.id),
  })),
  on(loadUsersApisFailure, state => ({
    ...state,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return usersApiReducer(state, action);
}
