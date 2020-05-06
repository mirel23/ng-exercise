import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingPageComponent,
  ],
})
export class LandingModule {}
