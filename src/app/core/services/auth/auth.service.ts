import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AuthModel } from '../../../shared/models/auth.model';

@Injectable()
export class AuthService {
  private user: User;
  private loggedIn: boolean = false;
  private authChangeEmitter: EventEmitter<AuthModel> = new EventEmitter<AuthModel>();

  /*
  * Sets the auth info when the user logs in/out and emit the change
  * */
  public setAuth(isLoggedIn: boolean) {
    this.loggedIn = isLoggedIn;
    this.user = isLoggedIn ? {
      firstName: 'Ahsan',
      lastName: 'Ayaz'
    } : null;

    this.authChangeEmitter.emit({
      isLoggedIn: this.loggedIn,
      user: this.user
    });
  }

  /*
  * Returns if the auth info
  * */
  public authInfo(): AuthModel {
    return {
      isLoggedIn: this.loggedIn,
      user: this.user
    };
  }

  /*
  * Returns the service emitter
  * */
  public getAuthChangeEmitter(): EventEmitter<AuthModel> {
    return this.authChangeEmitter;
  }
}
