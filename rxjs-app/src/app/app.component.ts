import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0)

  clickCount$=toObservable(this.clickCount); // converting signal to observable
  interval$=interval(1000);
  intervalSignal=toSignal(this.interval$); // converting observable into signal

  // new custom observable

  customInterval$=new Observable((subscriber)=>{
    let timesExecuted=0;
    const intervalId=setInterval(()=>{
      if(timesExecuted>3){
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }
      console.log("Emitting New Vlaue");
      subscriber.next({message: 'New Value'+timesExecuted});
      timesExecuted++;
    },2000);

  });


  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe( // you can modify the generated number provided by interval
    //     map((val) => val * 2)
    //   )
    //   .subscribe({
    //     next: (val) => console.log('Next value' + val),
    //   });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("COMPLETED")
    })

    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button #${val} times`),
      
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

  }

  constructor(){
    effect(()=>{
      console.log(`Clicked button #${this.clickCount()} times`);
    })
  }

  onClick(){
    this.clickCount.update((val)=>val+1);

  }
}
