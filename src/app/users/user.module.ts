import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@my-app/material/material.module';
import { UserRoutingModule } from '@my-app/user/user-routing.module';

import { UserListPageComponent } from './containers/user-list-page/user-list-page.component';

@NgModule({
  declarations: [UserListPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
