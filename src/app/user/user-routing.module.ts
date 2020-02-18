import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPageComponent } from '@my-app/user/containers/user-list-page/user-list-page.component'

export const routes: Routes = [
  {
    path: '',
    component: UserListPageComponent,
    data: { title: 'User List' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
