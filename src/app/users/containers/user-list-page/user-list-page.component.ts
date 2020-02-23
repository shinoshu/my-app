import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { UserListPageDataSource } from './user-list-page-datasource';
import { User } from '@my-app/users/models/user.model';
import { loadUsersApis, deleteUsersApis } from '@my-app/users/actions/users-api.actions';
import * as fromUsers from '@my-app/users/reducers/index';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource!: UserListPageDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'edit', 'delete'];

  constructor(
    private store: Store<fromUsers.State>,
    public router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadUsersApis());
    this.dataSource = new UserListPageDataSource(this.store);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  delete(id: string) {
    this.store.dispatch(deleteUsersApis({ id }));
  }
}
