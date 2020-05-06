import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppService } from './services/app/app.service';
import { ApiCallService } from './services/api-call/api-call.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [AppHeaderComponent, AppContentComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [AppService, ApiCallService]
})
export class CoreModule {}
