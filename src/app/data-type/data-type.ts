import { Component } from '@angular/core';

@Component({
  selector: 'app-data-type',
  imports: [],
  templateUrl: './data-type.html',
  styleUrl: './data-type.css',
})
export class DataType {
  data:number|string =20

  updateData(val:number|string){
    this.data= val
    console.log(this.sum(10,20));
  }

  sum(a:number,b:number):number{
    return a+b
  }

  handleEvent(event:PointerEvent|Event|MouseEvent){
    console.log(event)
  }
}
