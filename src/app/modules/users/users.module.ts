import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListPageComponent } from './pages/list/list.component';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';

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
})
export class UsersModule {}
