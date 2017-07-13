import { Component, OnInit } from '@angular/core';
import {DbService} from "../db.service";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  NameList:object[];

  constructor(private dbService: DbService)
  {

  }
  ngOnInit() {
    // reading name list form dataservice
    this.NameList=this.dbService.getData();
    console.log(this.NameList);
  }


}
