import { Action, createReducer, on } from '@ngrx/store';


export const authFeatureKey = 'auth';

export interface State {

}

export const initialState: State = {

};

const authReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
