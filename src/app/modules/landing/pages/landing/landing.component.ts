import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../core/services/app/app.service';
import { Task } from '../../../../core/mocks/tasks/tasks';

@Component({
  selector: 'ng-e-landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingPageComponent implements OnInit {
  exerciseTasks: Array<Task>;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.exerciseTasks = this.appService.getTasks();
  }
}
