import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Route[] = [
  {
    path: '',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
