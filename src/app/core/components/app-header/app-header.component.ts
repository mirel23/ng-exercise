import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  user: User;
  isLoggedIn: boolean;
  private authSubscription: Subscription;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscribeToAuthChange();

    this.isLoggedIn = this.authService.authInfo().isLoggedIn;
    this.user = this.authService.authInfo().user;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  login() {
    this.authService.setAuth(true);
  }

  signup() {
    this.authService.setAuth(true);
  }

  logout() {
    this.authService.setAuth(false);
  }

  /*
  * Subscribe to Auth service changes
  * */
  private subscribeToAuthChange() {
    this.authSubscription = this.authService.getAuthChangeEmitter()
      .subscribe(auth => {
        this.isLoggedIn = this.authService.authInfo().isLoggedIn;
        this.user = this.authService.authInfo().user;
      });
  }

  /*
 * Unsubscribe all subscriptions
 * */
  private unsubscribeAll() {
    debugger
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
