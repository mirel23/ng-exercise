import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
  ],
})
export class HomeModule {}
