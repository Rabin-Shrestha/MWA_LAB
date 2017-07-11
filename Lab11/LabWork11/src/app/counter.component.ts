import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <div id="outerContainer">
      <div id="innerContainer">
        <button (click)="decrementValue()">-</button>
        <span>{{counterValue}}</span> <!--This counter value is coming from below class-->
        <button (click)="incrementCounter()">+</button>
      </div>
    </div>
  `,
  styles: [`
    #outerContainer {
      background: gainsboro;
      padding: 20px;
      text-align: center;
      border: 2px solid green;
      overflow: hidden;
    }

    #innerContainer {
      border: 2px solid darkorange;
      padding: 10px;
      text-align: center;
      display: inline;
      overflow: hidden;
      height: 200px;
      width: 200px;
    }`],
  inputs: ['counterValue:currentCounterValue'] // for outside this component we will use currentCounterValue to be input for counterValue. here currentCounterValue is input and need to be read using [] big bracked
  , outputs: ['counterChange'] // we are exposing counterChange variable to outside( parent object), as an input to them. they will receive input using () parenthesis

})


export class CounterComponent implements OnInit {

  private counterValue: number ;
  private counterChange: EventEmitter<number> ; // We have defined eventEmitter to be exposed as $event in parent object.

  constructor() {
    this.counterChange = new EventEmitter();
  }

  /*initializing the output: by emitting default value*/
  ngOnInit()
  {
    this.counterChange.emit(this.counterValue);
  }
  /* upon + click incrementing the value*/
  incrementCounter() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false; // tells the browser not to propagate the event upward
  }

  /* upon - click decrementing the value*/
  decrementValue() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
}
