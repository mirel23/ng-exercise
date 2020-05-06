import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../shared/models/user.model';


@Component({
  selector: 'ng-e-users-list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersListPageComponent {
  users: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
  }
}
