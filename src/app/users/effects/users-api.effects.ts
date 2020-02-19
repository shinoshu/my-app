import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  loadUsersApis,
  loadUsersApisSuccess,
  loadUsersApisFailure,
  addUsersApis,
  addUsersApisSuccess,
  addUsersApisFailure,
  deleteUsersApis,
  deleteUsersApisSuccess,
  deleteUsersApisFailure,
} from '@my-app/users/actions/users-api.actions';
import { User } from '@my-app/users/models/user.model';
import { UserService } from '@my-app/users/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersApiEffects {
  loadUsersApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersApis),
      switchMap(() =>
        this.userService.getUserList().pipe(
          map((users: User[]) =>
            loadUsersApisSuccess({ users })
          ),
          catchError(error =>
            of(loadUsersApisFailure({ error }))
          )
        )
      )
    )
  );

  addUsersApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUsersApis),
      switchMap(({ user }) =>
        this.userService.addUser(user).pipe(
          map(() =>
            addUsersApisSuccess()
          ),
          catchError(error =>
            of(addUsersApisFailure({ error }))
          )
        )
      )
    )
  );

  deleteUsersApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUsersApis),
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map(() =>
            deleteUsersApisSuccess()
          ),
          catchError(error =>
            of(deleteUsersApisFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }
}
