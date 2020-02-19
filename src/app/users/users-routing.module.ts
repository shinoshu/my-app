import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPageComponent } from '@my-app/users/containers/user-list-page/user-list-page.component';
import { UserFormPageComponent } from '@my-app/users/containers/user-form-page/user-form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListPageComponent,
    data: { title: 'User List' },
  },
  {
    path: 'add',
    component: UserFormPageComponent,
    data: { title: 'User Form' },
  },
  {
    path: 'edit/:id',
    component: UserFormPageComponent,
    data: { title: 'User Form' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
