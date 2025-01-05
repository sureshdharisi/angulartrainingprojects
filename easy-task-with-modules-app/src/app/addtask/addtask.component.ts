import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AddTask, Task } from '../models/user.task';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';
// FormsModule used to enable two way data binding
@Component({
  selector: 'app-addtask',
  standalone: false,
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<AddTask>();

  summary = '';
  title = '';
  dueDate = '';
  private tasksService = inject(TasksService);
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      summary: this.summary,
      title: this.title,
      dueDate: this.dueDate,
    },this.userId);
    // this.add.emit({
    //   summary: this.summary,
    //   title: this.title,
    //   dueDate: this.dueDate,
    // });
    this.close.emit();
  }
}
