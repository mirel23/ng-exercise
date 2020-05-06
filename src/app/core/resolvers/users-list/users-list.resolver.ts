import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallService } from '../../services/api-call/api-call.service';
import { User } from '../../../shared/models/user.model';
import { ApiUsers } from '../../../shared/models/api-users.model';

/**
 ** Resolves the users list before rendering a route.
 **/
@Injectable()
export class UsersListResolver implements Resolve<User[]> {
  constructor(private apiCallService: ApiCallService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.apiCallService.get<ApiUsers>('https://reqres.in/api/users')
      .pipe(
        map((response) => {
          return response.data.map((user) => {
            return {
              firstName: user.first_name,
              lastName: user.last_name,
              id: user.id
            };
          })
        })
      );
  }
}
