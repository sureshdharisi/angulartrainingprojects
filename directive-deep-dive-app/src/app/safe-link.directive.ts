import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

// This directive can be used to handle the events in type srcipt
@Directive({
  selector: 'a[appSafeLink]', // any anchor element can use this attribute
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
    
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myapp'); // default value is myapp

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safelink directive is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      //const address=(event.target as HTMLAnchorElement).href;
      const address = this.hostElementRef.nativeElement.href; // using Dependency Injection
      //  (event.target as HTMLAnchorElement).href=address+"?from="+this.queryParam();
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }

    event?.preventDefault();
  }
}
