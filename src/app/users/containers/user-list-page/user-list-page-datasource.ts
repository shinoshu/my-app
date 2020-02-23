import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import * as fromUsers from '@my-app/users/reducers/index';
import { User } from '@my-app/users/models/user.model';
import { loadUsersApis } from '@my-app/users/actions/users-api.actions';

/**
 * Data source for the UserListPage view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserListPageDataSource extends DataSource<User> {
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private store: Store<fromUsers.State>) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<User[]> {
    this.store.dispatch(loadUsersApis());
    return this.store.pipe(select(fromUsers.selectAllUsers));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }
}
