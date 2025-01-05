import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host:{
    '(click)':'onLog()'
  }
})
export class LogDirective {


  private elementRef = inject(ElementRef);

  constructor() { }

  onLog(){
    console.log(this.elementRef.nativeElement);
  }

}
