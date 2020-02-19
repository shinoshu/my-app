import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { User } from '@my-app/users/models/user.model';
import { loadUsersApis } from '@my-app/users/actions/users-api.actions';
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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'delete'];

  constructor(private store: Store<fromUsers.State>) { }

  ngOnInit() {
    this.store.dispatch(loadUsersApis());
  }

  ngAfterViewInit() {
    this.table.dataSource = this.store.pipe(select(fromUsers.selectAll));
  }
}
