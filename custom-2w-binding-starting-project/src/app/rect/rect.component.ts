import { Component, EventEmitter, input, model, output, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  
  //size = input.required<{width:string, height:string}>();

  //@Output() sizeChange = new EventEmitter<{width:string, height:string}>()
  //sizeChange=output<{width:string, height:string}>();
// the text Change should be appended for the variable to achieve two way binding


// Alternative way to achieve two way binding angular >17

size=model.required<{width:string, height:string}>()

  onReset() {
    //this.sizeChange.emit({width: '200',height:'200'});
    this.size.set({width: '200',height:'200'});
  }
}
