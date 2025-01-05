import { afterNextRender, afterRender, AfterViewInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None ,
   host:{
     class: 'control',
    '(click)':'onClick()'
   }
  
})
export class ControlComponent implements AfterViewInit{


  //@HostBinding('class') className='control'; // This will used to select the css class property
  //@HostListener('(click)')

  label = input.required();

  private el=inject(ElementRef); // This can be used to get hold of host element

  @ContentChild("input") private controlContentChild?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // using signal
  private control=contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");

  constructor(){
    afterRender(()=>console.log("AFTER RENDER"));
    afterNextRender(()=>console.log("AFTER NEXT RENDER"));
  }

  //@HostListener('click')
  onClick(){
    console.log("Clicked");

    console.log(this.el);

    console.log(this.controlContentChild);
    console.log("This is from signal"+this.control());
  }

  ngAfterViewInit(): void {
    console.log("After view init");
    
  }

}
