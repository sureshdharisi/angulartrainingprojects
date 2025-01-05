import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SingletaskComponent } from "./singletask/singletask.component";
import { Header } from "./header/header.component";
import { CardComponent } from "./shared/card/card.component";
import { BrowserModule } from "@angular/platform-browser";
import { AddtaskComponent } from "./addtask/addtask.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations:[AppComponent,
    Header,
    UserComponent,
    
  ], // declarations will be non standalone components
  bootstrap:[AppComponent] ,// This is the root component to start the application
  imports:[  
    BrowserModule,  //Date Pipe is automaticalli imported from Browser Module
    SharedModule,
    TasksModule
  ], // imports will be standalone components

})
export class AppModule{

}