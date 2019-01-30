import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Profile } from '../../../models/profile.interface';
import { AuthService } from '../../user/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient,private authService: AuthService) {}
  
  url:string = "https://srfmw4515g.execute-api.eu-west-2.amazonaws.com/dev";
  endPoints:any;
  getUser(payload:string): Observable<Profile> {
    return this.http
      .get<Profile>(this.url+"/profile/get/"+payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  editUser(payload: Profile): Observable<Profile> {
    const username=this.authService.getAuthenticatedUser().getUsername();
    const profile ={...payload,username}
    console.log(JSON.stringify(profile));
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin','*');
    return this.http
      .post<Profile>(this.url+"/profile/edit", JSON.stringify(profile),{headers:headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getMyself(): Observable<Profile> {
    const me = this.authService.getAuthenticatedUser().getUsername();
    return this.http
      .get<Profile>(this.url+"/profile/get/"+me)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }


}
