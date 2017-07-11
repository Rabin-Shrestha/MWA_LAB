import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /*
  To display updated value of counter in parent we have defined the variable changedvalue.
  upon valueChangedEventOccur() function call its value will be changed.
  in app.component.html we have used it as :
  <counter-component (counterChange)="valueChangedEventOccur($event)" [currentCounterValue]="0"></counter-component>
  <span>The component counter value is : {{changedValue}}</span>
*/

private changedValue:number;
  valueChangedEventOccur(data)
  {
    this.changedValue=data;
  }
}
