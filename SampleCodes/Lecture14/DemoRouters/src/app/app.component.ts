import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.active { color:#fff; background-color:#f44336; border-radius:32px; padding: 5px 10px; }']
})
export class AppComponent {
  // angular will boot our AppComponent, then read the Routes we defined
  // will load the Route based on our specifications and push it into <router-outlet>
  // No Network traffic needed when loading components!
}
