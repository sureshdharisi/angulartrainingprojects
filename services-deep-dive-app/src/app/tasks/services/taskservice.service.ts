import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../task.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
// Alternate way of defining the injectable service is in bootstrap application level in main.ts
// you can register this configuration atelement level like task.componen.ts
// then this service is available task component and its children
// <app-new-task />
// <app-tasks-list />


// Ideally defining the injectable configuration at component level is best instead of main.tx
export class TaskserviceService {
  private tasks = signal<Task[]>([]);

  private logService=inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldtasks) => [...oldtasks, newTask]);
    this.logService.log(`ADDED NEW TASK`+taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
    this.logService.log(`UPDATED THE TASK`+taskId);
  }

}
