import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  //@ViewChild("form") form?:ElementRef<HTMLFormElement>; //"form is the name of template variable without hash tag"

  @ViewChildren(ButtonComponent) buttons?:ElementRef<ButtonComponent>[]; // This is example to get all childs whose type is ButtonComponent

  add = output<{title:string, text:string}>();
  // Viewchild using signals
  private form=viewChild.required<ElementRef<HTMLFormElement>>("form");
  ngAfterViewInit(): void {
    console.log("After view init");
    console.log(this.form().nativeElement)
  }

  ngOnInit(): void {
    console.log("On Init");
    console.log(this.form().nativeElement)
  }

  onSubmit(titleElement:HTMLInputElement, requestData:HTMLTextAreaElement){
    console.log("Submitted");
    console.dir(titleElement);
    const enteredTitle=titleElement.value;
  }

  onInputSubmit(title:String, requestData:string,form:HTMLFormElement){
    console.log(title);
    console.log(requestData);
    form.reset(); // This will get access of input elements and resets the data
    //const enteredTitle=titleElement.value;
  }

  onInputSubmitWithoutTemplateDeclare(title:string, requestData:string){
    console.log(title);
    console.log(requestData);
    this.add.emit({title:title, text:requestData})
    this.form()?.nativeElement. reset(); // This will get access of input elements and resets the data
    //const enteredTitle=titleElement.value;
  }
}
