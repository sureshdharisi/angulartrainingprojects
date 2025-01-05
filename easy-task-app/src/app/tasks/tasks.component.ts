import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { dummyTasks } from '../dummy-tasks';
import { SingletaskComponent } from '../singletask/singletask.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { AddTask, Task } from '../models/user.task';
import { TasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  imports: [SingletaskComponent, AddtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() taskuserid!: string;

  isAddingTask = false;

  constructor(private tasksService:TasksService){}

  get username() {
    return DUMMY_USERS.find((user) => user.id === this.taskuserid)?.name;
  }

  get usertasks() {
    return this.tasksService.getUserTasks(this.taskuserid);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
