import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {


  constructor(private element:ElementRef,private renderer:Renderer)
  {
   //Applying the style to component that uses appUpper directive as an attribute
    renderer.setElementStyle(element.nativeElement,'text-transform','uppercase');

  }

}
