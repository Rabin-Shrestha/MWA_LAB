import {Directive, ElementRef, HostListener, Input, OnInit, Renderer} from '@angular/core';
import {HOST_ATTR} from "@angular/platform-browser/src/dom/dom_renderer";

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit
{
  @Input()appMyvisibility:boolean;
  @HostListener('click')changeVisibility(){
    // on each click we are chaning the appMyvisibility value
    this.appMyvisibility=!this.appMyvisibility;
    let option=(this.appMyvisibility)?'visible':'hidden';
    this.renderer.setElementStyle(this.element.nativeElement,'visibility',option);

  }

  constructor(private element:ElementRef,private renderer:Renderer)
  {

  }
  ngOnInit()
  {
    //if appMyvisibility is true, visibility should be visible otherwise hidden
    let option=(this.appMyvisibility)?'visible':'hidden';
    this.renderer.setElementStyle(this.element.nativeElement,'visibility',option);
  }


}
