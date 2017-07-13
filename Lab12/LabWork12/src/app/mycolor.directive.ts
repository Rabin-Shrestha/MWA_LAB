import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective implements OnInit {

  private colorList: string[] = ["red", "green", "orange", "purple", "yellow","white"];
  private RandomColor:string;

  @Output()private colorChangeEventEmitter: EventEmitter<string>; //Component that uses this Directive will hae input to receive colorChangeEventEmitter Object Which is event emitter
  @HostBinding('style.color') mycolor; // Bind the value of mycolor into style.color on appMycolor directive
  @HostListener('click') changeColor()  {
    this.RandomColor = this.colorList[Math.floor(Math.random() * (this.colorList.length))];
    this.mycolor = this.RandomColor;
    /* Or you can change the color without host binding like this as well
    *  this.renderer.setElementStyle(this.element.nativeElement,'color',this.RandomColor)
    * */


    /*Emitting the selected random color, so that component can triger another event to display selected color*/
    this.colorChangeEventEmitter.emit(this.RandomColor);
  }

  constructor(private renderer:Renderer,private element:ElementRef) {
    this.colorChangeEventEmitter = new EventEmitter();
  }

  ngOnInit() {
    //
    this.colorChangeEventEmitter.emit(this.RandomColor);
  }


}
