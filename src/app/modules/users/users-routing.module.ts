import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersLayoutComponent } from './layouts/users/users-layout.component';
import { UsersListPageComponent } from './pages/list/list.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      {
        path: 'list',
        component: UsersListPageComponent,
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
