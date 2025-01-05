import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";



@Component({
  selector: 'app-root',
  imports: [ Header, UserComponent,  TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'essentials';
  // The user component is using signal elements to pass the inputs.
  users=DUMMY_USERS;
  userid!:string;

  onSelectUser(id:string){

    console.log(id)
    this.userid=id;

  }
}
