import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersListPageComponent } from './pages/list/list.component';
import { UserDetailPageComponent } from './pages/detail/detail.component';
import { UsersListResolver } from '../../core/resolvers/users-list/users-list.resolver';
import { UserDetailResolver } from '../../core/resolvers/user-detail/user-detail.resolver';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersLayoutComponent,
    UsersListPageComponent,
    UserDetailPageComponent,
    UsersListComponent,
    UserDetailComponent,
  ],
  exports: [
    UsersListComponent,
    UserDetailComponent,
  ],
  providers: [
    UsersListResolver,
    UserDetailResolver
  ]
})
export class UsersModule {}
