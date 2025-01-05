
import { Component,computed,Input,input,signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-signaluser',
  imports: [],
  templateUrl: './signaluser.component.html',
  styleUrl: './signaluser.component.css'
})
export class SignaluserComponent {
//! will be used not to initialize at declaration
  // Example: @Input() name!: string;
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  //@Input({required: false}) id!: string;

  // Accepting inputs using signals
  // input (smaller case i)
  //avatar = input<string>();
  ///name = input<string>();
  //Alternateway:avatar = input<string>();
  avatar = input.required<string>();
  name = input.required<string>();



  //selectedUser =signal( DUMMY_USERS.at(randomIndex));
  //imagePath= computed(()=>'users/'+this.selectedUser()?.avatar)
  /*get imagePath(){
    return "users/"+this.avatar;
  }*/

    // getting image path from compted as data is coming from signals

   imagePath= computed( ()=> "users/"+this.avatar()  );
  /*
  get imagePath(){
    return "users/"+this.selectedUser()?.avatar;
  }
*/
  // Button listener. You can use any name. But for better understaing to the listeners start with on.
  onSelectUser(){

    //console.log("CLicked");
    //const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);

  }
}
