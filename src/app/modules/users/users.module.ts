import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListPageComponent } from './pages/list/list.component';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';
import { UsersListResolver } from '../../core/resolvers/users-list/users-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersLayoutComponent,
    UsersListPageComponent,
  ],
  providers: [
    UsersListResolver,
  ]
})
export class UsersModule {}
