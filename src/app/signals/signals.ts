import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
   data=10;
   count=signal(100);
   constructor(){
      effect(()=>{
        // console.log("this is data",this.data)
         console.log("this is count",this.count())
         if(this.count()==110){
          this.count.set(0);
         }
      })
   }
  updateData(){
    this.data++;
  }

   updateCount(){
    this.count.set(this.count()+1);
  }
}
