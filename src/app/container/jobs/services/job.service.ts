import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Job } from '../../../models/job.interface';
import { AuthService } from '../../user/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class JobService {
  constructor(private http: HttpClient,private authService: AuthService) {}
  
  url:string = "https://srfmw4515g.execute-api.eu-west-2.amazonaws.com/dev";
  endPoints:any;

  getJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>(this.url+"/get-jobs")
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addJob(payload: Job): Observable<Job> {
    const creator=this.authService.getAuthenticatedUser().getUsername();
    const job ={...payload,creator}
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin','*');
    return this.http
      .post<Job>(this.url+"/add-job", JSON.stringify(job),{headers:headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  applyJob(payload: any): Observable<Job> {
    const user = this.authService.getAuthenticatedUser().getUsername();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    let applyObject={
      id:payload.Job_id,
      user
    }
    return this.http
      .post<Job>(this.url+"/apply", JSON.stringify(applyObject),{headers:headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }


}
