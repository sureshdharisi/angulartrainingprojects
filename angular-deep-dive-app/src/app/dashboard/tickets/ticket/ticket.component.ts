import { AfterViewInit, Component, ElementRef, input, OnInit, output, signal, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticket.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  //data = input.required<Ticket>();

  data = input.required<Ticket>();

  close = output();
  detailsVisibile =signal(false);
  

  onToggleDetails(){
   //this.detailsVisibile.set(!this.detailsVisibile());
   this.detailsVisibile.update((visible)=>!visible);

  }

  onMarkAsCompleted(){
    this.close.emit();
  }

}
