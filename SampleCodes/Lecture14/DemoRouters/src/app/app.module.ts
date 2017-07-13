import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { RouteComponent } from './params/route.component';
import { QueryComponent } from './params/query.component';
import { FragmentComponent } from './params/fragment.component';
import { PreserveComponent } from './params/preserve.component';
import { ParentComponent } from './parentchild/parent.component';
import { ChildComponent } from './parentchild/child.component';
import { GuardsComponent } from './guards/guards.component';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    RouteComponent,
    QueryComponent,
    FragmentComponent,
    PreserveComponent,
    ParentComponent,
    ChildComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes // add it to imports
  ],
  providers: [MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
