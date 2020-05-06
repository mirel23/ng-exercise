import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListPageComponent } from './pages/list/list.component';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';
import { UsersListResolver } from '../../core/resolvers/users-list/users-list.resolver';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersLayoutComponent,
    UsersListPageComponent,
    UsersListComponent
  ],
  exports: [
    UsersListComponent
  ],
  providers: [
    UsersListResolver,
  ]
})
export class UsersModule {}
