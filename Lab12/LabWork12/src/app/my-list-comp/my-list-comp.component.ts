import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-list-comp',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of listItems" appMycolor (colorChangeEventEmitter)="changeCurrentlyActiveColor($event)">
          <span appUpper>{{item}}</span>
        </li>
      </ul>
    </div>
    <h3> The selected color is :{{currentlyActiveColor}}</h3>    
    <p [appMyvisibility]="true">Click this paragraph to hide it</p>
    <p [appMyvisibility]="true">Click this paragraph to hide it</p>
    <p [appMyvisibility]="true">Click this paragraph to hide it</p>
    <p [appMyvisibility]="true">Click this paragraph to hide it</p>
    <p [appMyvisibility]="false">This pararagraph will never visible: false</p>
    
  `,
  styles: [`
    li{background:grey; border: 1px solid ; list-style-type: none}
    p{border: 2px solid;border-radius: 5px; padding: 5px}`
  ]
})


export class MyListCompComponent implements OnInit {
  @Input() private listItems: Array<string>; // here listItems will be provided form app-my-list-comp tag input eg:[listItems]="['val1','val2']"
  private currentlyActiveColor: string;
  constructor() {
  }
  ngOnInit() {
    console.log(this.listItems);
  }
  /*For displaying the currently active color value in page: */
  private changeCurrentlyActiveColor(colorvalue: string) {
    this.currentlyActiveColor = colorvalue;
  }

}
