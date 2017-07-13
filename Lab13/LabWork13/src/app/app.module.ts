import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DbService} from "./db.service";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import {MyGuardsGuard} from "./my-guards.guard";
import { ErrorComponent } from './error/error.component';


// Assigning the Routes for Routing
const MY_ROUTES:Routes=[
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'students', component:StudentsComponent},
  {path:'error', component:ErrorComponent},
  //{path:'profile/:id',component:ProfileComponent},
 {path:'profile/:id',component:ProfileComponent,canActivate:[MyGuardsGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES) // using the  our routing
  ],
  providers: [DbService, MyGuardsGuard],// adding MyGuardsGuard as a service provider, a it will filter the url link and check destination
  bootstrap: [AppComponent]
})
export class AppModule { }
