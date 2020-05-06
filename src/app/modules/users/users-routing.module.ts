import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';
import { UsersListPageComponent } from './pages/list/list.component';
import { UsersListResolver } from '../../core/resolvers/users-list/users-list.resolver';
import { UserDetailPageComponent } from './pages/detail/detail.component';
import { UserDetailResolver } from '../../core/resolvers/user-detail/user-detail.resolver';

const routes: Route[] = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      {
        path: 'list',
        component: UsersListPageComponent,
        resolve: {
          users: UsersListResolver
        }
      },
      {
        path: ':id',
        component: UserDetailPageComponent,
        resolve: {
          user: UserDetailResolver
        }
      },
      { path: '',   redirectTo: '/users/list', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
