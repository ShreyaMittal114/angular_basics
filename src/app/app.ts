import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Event } from './event/event';
import { DataType } from './data-type/data-type';
import { PropertyBinding } from './property-binding/property-binding';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile,Event,DataType,PropertyBinding,Signals],
  templateUrl: './app.html',
  // template :`<h1> inline temp{{name}} </h1> `,  inline temp
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-basics');
  // name = "Shreya"
  // getname(){
  //    return this.name
  // }

  //  getsum(a:number,b:number){
  //    return a+b;
  // }

    callMe(){
      alert("hello angular 21")
    }
    count=0;
       counter(action:String){
        if(action=== 'minus'){
          if(this.count>0){
              this.count--;
          }
         
        }
        else{
          this.count++;
        }
         console.log(this.count)
         this.showUserName();
       }


       showUserName(){
        alert("Hello")
       }

}
