import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
//export class ServerStatusComponent implements OnInit{
  export class ServerStatusComponent { // THis is availbale in latest implementation
  currentStatus: 'online'| 'offline' | 'unknown' = 'offline';

  currentStatusSignal  = signal<'online'| 'offline' | 'unknown'>( 'offline')

  //private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect((onClenaup)=>{
      console.log(this.currentStatusSignal());
      onClenaup(()=>{
        console.log("DO CLEANUP ACTIVITIES HERE");
      })
    })
    
  }

  ngOnInit(){
    console.log("Init method initialized");
    const interval=setInterval(()=>{
      const rnd =Math.random(); // 0-0..=999999999

      console.log(rnd)
      if(rnd<0.5){
        this.currentStatus = 'online';
        this.currentStatusSignal.set( 'online');
      } else if(rnd < 0.9){
        this.currentStatus = 'offline';
        this.currentStatusSignal.set( 'offline');
      }else{
        this.currentStatus = 'unknown';
        this.currentStatusSignal.set( 'unknown');
      }
    },5000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }

  ngOnDestroy(){

    //clearInterval(this.interval);

  }
}
