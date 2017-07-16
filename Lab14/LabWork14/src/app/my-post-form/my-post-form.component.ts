import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Rx";
import {MyService} from "../my-service.service";

@Component({
  selector: 'app-my-post-form',
  templateUrl: './my-post-form.component.html',
  styleUrls: ['./my-post-form.component.css']
})
export class MyPostFormComponent implements OnInit
{
  private myForm:FormGroup;
  private user = {
    name: '',
    email: '',
    post: ''
  };


  private subscription: Subscription;

  constructor(private fb:FormBuilder,private myService:MyService)
  {
    this.myForm=fb.group(
      {'name': ['', Validators.required],
        'email': ['', Validators.required],
        'post': ['', [Validators.minLength(10), Validators.required]]
      });

  }
  consoleLoadedData()
  {
    let resultDataProvider=this.myService.loadData();

      resultDataProvider.subscribe((result)=>
      {
        console.log((result[0]));
        console.log((result[1][1]));
        /*
        THIS IS BAD PRACTICE
        this.myForm.controls['name'].setValue(result[0].name);
        this.myForm.controls['email'].setValue(result[0].email);
        this.myForm.controls['post'].setValue(result[1][1].title);
        */
        this.user.name=result[0].name;
        this.user.email=result[0].email;
        this.user.post=result[1][1].title;

      });



  }
  onsubmit():void
  {
    console.log(this.user);
  }
  ngOndestroy()
  {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
