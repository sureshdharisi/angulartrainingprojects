import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskserviceService } from '../services/taskservice.service';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  private tasksService:TaskserviceService ;

  constructor(tService:TaskserviceService){
    this.tasksService = tService;
  }

  // constructor(@Inject(TasksServiceToken) tService:TaskserviceService){
  //   this.tasksService = tService;
  // }

  onAddTask(title: string, description: string) {
    
    this.tasksService.addTask({title,description});
    this.formEl()?.nativeElement.reset();
  }
}
