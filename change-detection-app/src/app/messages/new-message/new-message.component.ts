import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../service/messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  //add = output<string>();
  enteredText = signal('');

  private messageService=inject(MessagesService);

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    //his.add.emit(this.enteredText());
    this.messageService.addMessage( this.enteredText());
    this.enteredText.set('');
  }
}
