import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'ng-e-user-detail-page',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailPageComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
  }

  /*
  * On click we redirect the user to the previous page
  * */
  goBack() {
    this.location.back();
  }
}
