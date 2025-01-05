import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../models/user.task';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';


@Component({
  selector: 'app-singletask',
  imports: [CardComponent,DatePipe],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css',
})
export class SingletaskComponent {

  @Input() task?: Task;
 
  private tasksService = inject(TasksService);

  onCompleteTask(){
    console.log("selected task id = "+this.task?.id);
    this.tasksService.completeTask(this.task?this.task.id:'');
  }

 }
