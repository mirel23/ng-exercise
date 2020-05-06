import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { UsersProxyService } from '../../proxies/users/users-proxy.service';

/**
 ** Resolves the user's details before rendering a route.
 **/
@Injectable()
export class UserDetailResolver implements Resolve<User> {
  constructor(private usersProxyService: UsersProxyService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.usersProxyService.getUser(route.paramMap.get('id'));
  }
}
