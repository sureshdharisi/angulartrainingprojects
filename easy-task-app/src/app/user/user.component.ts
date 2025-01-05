import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../models/user.model';
import { CardComponent } from "../shared/card/card.component";

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //! will be used not to initialize at declaration
  // Example: @Input() name!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  //select =  output<String>(); // This is another way to create output data
  //@Input({ required: true }) id!: string;

  @Input({ required: false }) user?: User;

  // Accepting inputs using signals
  // input (smaller case i)
  //avatar = input<string>();
  ///name = input<string>();
  //Alternateway:avatar = input<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();

  //selectedUser =signal( DUMMY_USERS.at(randomIndex));
  //imagePath= computed(()=>'users/'+this.selectedUser()?.avatar)
  get imagePath() {
    return 'users/' + this.user?.avatar;
  }

  // Button listener. You can use any name. But for better understaing to the listeners start with on.
  onSelectUser() {
    //console.log("CLicked");
    //const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user?.id);
  }
}
