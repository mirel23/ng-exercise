import { Component, Input } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
 @Input() users: User[] = [];
}
