import { Injectable } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DbService {
 private studentData:object[]= [{id:'1',name:'Assad Saad',stuId:'123',Email:'acb@xyz.com'},{id:'2',name:'Rabin Shrestha',stuId:'257',Email:'ppacb@xyz.com'}];
  constructor() { }
 public getData():object[]
 {
    return this.studentData;
 }
 public getStudentDetails(sid:string):object
 {
   for( let data of this.studentData)
   {
     console.log(data);
     if(data["id"]==sid)
     {
       return data;
     }

   }
   return null;
 }
}
