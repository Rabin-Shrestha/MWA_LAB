import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-fragment',
  template: `
    <p>
      PreserveComponent! 
    </p>
    <p *ngIf="fragment">Fragment: {{fragment}}</p>
    <p *ngIf="id">ID: {{id}}</p>
  `,
  styles: []
})
export class PreserveComponent {
// wins if combined with [queryParams]
  private subscription1: Subscription;
  private subscription2: Subscription;
  fragment: string;
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription1 = activatedRoute.fragment.subscribe(
        (fParam: any) => this.fragment = fParam
    );
    this.subscription2 = activatedRoute.queryParams.subscribe(
        (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
