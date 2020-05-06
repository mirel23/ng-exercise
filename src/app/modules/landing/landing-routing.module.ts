import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing/landing.component';

const routes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
