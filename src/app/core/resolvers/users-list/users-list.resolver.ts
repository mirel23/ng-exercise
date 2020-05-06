import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { UsersProxyService } from '../../proxies/users/users-proxy.service';

/**
 ** Resolves the users list before rendering a route.
 **/
@Injectable()
export class UsersListResolver implements Resolve<User[]> {
  constructor(private usersProxyService: UsersProxyService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.usersProxyService.getAll();
  }
}
