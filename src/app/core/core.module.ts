import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppService } from './services/app/app.service';
import { ApiCallService } from './services/api-call/api-call.service';
import { UsersProxyService } from './proxies/users/users-proxy.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [AppHeaderComponent, AppContentComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [AppService, ApiCallService, AuthService, UsersProxyService]
})
export class CoreModule {}
