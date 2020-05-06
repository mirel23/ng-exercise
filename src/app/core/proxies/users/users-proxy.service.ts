import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallService } from '../../services/api-call/api-call.service';
import { ApiSingleUser, ApiUsers } from '../../../shared/models/api-users.model';
import { REQ_RES_API } from '../../../configs/req-res-endpoints.config';
import { User } from '../../../shared/models/user.model';

@Injectable()
export class UsersProxyService {
  constructor(
    private apiCallService: ApiCallService,
  ) {}

  // Get all users
  getAll(): Observable<User[]> {
    return this.apiCallService.get<ApiUsers>(REQ_RES_API.getUsers)
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

  // Get user by id
  getUser(id: string): Observable<User> {
    return this.apiCallService.get<ApiSingleUser>(REQ_RES_API.getUsers + '/' + id)
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
