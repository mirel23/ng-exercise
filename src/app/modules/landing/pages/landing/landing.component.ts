import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../core/services/app/app.service';
import { Task } from 'src/app/core/mocks/tasks/tasks';

@Component({
  selector: 'ng-e-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  exerciseTasks: Array<Task>;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.exerciseTasks = this.appService.getTasks();
  }
}
