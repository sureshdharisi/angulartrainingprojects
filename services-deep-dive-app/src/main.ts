import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskserviceService } from './app/tasks/services/taskservice.service';
import { LoggingService } from './app/tasks/services/logging.service';
import { InjectionToken } from '@angular/core';

// bootstrapApplication(AppComponent,{
//     providers:[LoggingService]
// }).catch((err) => console.error(err));
// Instead of defining above it is better to define @Injectable at component level
//bootstrapApplication(AppComponent,).catch((err) => console.error(err));

export const TasksServiceToken=new InjectionToken<TaskserviceService>('Custom-DI-Token')

// the below is similar to qualifier functionality in Spring
// in this way you can create multiple instances of services with different token
// If you want to use this class you can use corresponding injector token
bootstrapApplication(AppComponent,{
    providers:[{
        provide: TasksServiceToken,
        useClass: TaskserviceService
    }]
}).catch((err) => console.error(err));
