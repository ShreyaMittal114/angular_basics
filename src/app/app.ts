import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // template :`<h1> inline temp{{name}} </h1> `,  inline temp
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basics');
  name = "Shreya"
  getname(){
     return this.name
  }

   getsum(a:number,b:number){
     return a+b;
  }
}
