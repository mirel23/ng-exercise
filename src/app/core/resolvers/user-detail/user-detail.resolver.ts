import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallService } from '../../services/api-call/api-call.service';
import { User } from '../../../shared/models/user.model';
import { ApiSingleUser } from '../../../shared/models/api-users.model';
import { REQ_RES_API } from '../../../configs/req-res-endpoints.config';

/**
 ** Resolves the user's details before rendering a route.
 **/
@Injectable()
export class UserDetailResolver implements Resolve<User> {
  constructor(private apiCallService: ApiCallService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.apiCallService.get<ApiSingleUser>(REQ_RES_API.getUsers + '/' + route.paramMap.get('id'))
      .pipe(
        map((response) => {
          return {
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            email: response.data.email,
            avatar: response.data.avatar,
          };
        })
      );
  }
}
