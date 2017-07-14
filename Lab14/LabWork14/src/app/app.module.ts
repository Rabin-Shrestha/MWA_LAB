import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { MyPostFormComponent } from './my-post-form/my-post-form.component';
import{MyService} from './my-service.service';
import{HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MyPostFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
