import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '@my-app/users/models/user.model';
import { loadUsersApis, deleteUsersApis } from '@my-app/users/actions/users-api.actions';
import * as fromUsers from '@my-app/users/reducers/index';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<User>;
  users$!: Observable<User[]>;
  subscription!: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'edit', 'delete'];

  constructor(
    private store: Store<fromUsers.State>,
    public router: Router,
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.store.dispatch(loadUsersApis());
    this.users$ = this.store.pipe(select(fromUsers.selectAllUsers));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.subscription = this.users$.subscribe(users => {
      this.dataSource.data = users;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: string) {
    this.store.dispatch(deleteUsersApis({ id }));
  }
}
