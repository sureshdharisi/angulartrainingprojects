import { NgModule } from '@angular/core';
import { SingletaskComponent } from '../singletask/singletask.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SingletaskComponent, AddtaskComponent, TasksComponent],
  exports: [TasksComponent],
  imports:[CommonModule,FormsModule, SharedModule]
})
export class TasksModule {}
