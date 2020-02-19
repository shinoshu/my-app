import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@my-app/material/material.module';
import { UserRoutingModule } from '@my-app/users/users-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from '@my-app/users/reducers';
import { UserEffects } from '@my-app/users/effects/user.effects';
import { UsersApiEffects } from '@my-app/users/effects/users-api.effects';
import { UserListPageComponent } from '@my-app/users/containers/user-list-page/user-list-page.component';

@NgModule({
  declarations: [UserListPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducers),
    EffectsModule.forFeature([UserEffects, UsersApiEffects]),
  ]
})
export class UserModule { }
