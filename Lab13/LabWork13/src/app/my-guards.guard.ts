import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core'
import {DbService} from "./db.service";

@Injectable()
export class MyGuardsGuard implements CanActivate {

  private studentId: string;

  constructor(private r: Router, private dbService: DbService, private activatedRoute: ActivatedRoute)
  {

  }
  ngOnIt()
  {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return confirm("are you sure");

    this.studentId = next.params['id'];
    console.log("student id :"+this.studentId);

   let studentsearchedResult:Object = this.dbService.getStudentDetails(this.studentId);
    console.log("student serarch reult is :"+studentsearchedResult);
    if (!studentsearchedResult) {
      this.r.navigate(['error']);
      return false;
    }
    else {
      return true;
    }

  }

}

