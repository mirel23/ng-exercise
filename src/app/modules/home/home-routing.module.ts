import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
