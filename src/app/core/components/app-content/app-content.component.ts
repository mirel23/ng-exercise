import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnDestroy {
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
    this.authService.setAuth(true)
  }

  logout() {
    this.authService.setAuth(false)
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
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
