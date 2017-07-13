import {Component, OnInit, Output} from '@angular/core';
import {DbService} from "../db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileDetails:object; // ProfileDetails object will be used in component.html file to display student details
  private studentId:string;
/* *Here we are injecting DbService and using it to acess Prifile details based on Id provied
* *ActivatedRoute is being used for reading parameter
* *
* */
  constructor(private dbService:DbService,private route:ActivatedRoute)
  {
    route.params.subscribe(prms=>{this.studentId=prms['id']});
    this.profileDetails=dbService.getStudentDetails(this.studentId);
  }

  ngOnInit() {
  }

}
