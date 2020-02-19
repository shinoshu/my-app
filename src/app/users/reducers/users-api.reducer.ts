import { Action, createReducer, on } from '@ngrx/store';


export const usersApiFeatureKey = 'usersApi';

export interface State {

}

export const initialState: State = {

};

const usersApiReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return usersApiReducer(state, action);
}
