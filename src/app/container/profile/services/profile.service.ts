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
  
  url:string = environment.backendUrl;
  endPoints:any;
  getUser(payload:string): Observable<Profile> {
    return this.http
      .get<Profile>(this.url+"/profile/get/"+payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  getAllUsers(): Observable<Profile[]> {
    return this.http
      .get<Profile[]>(this.url+"/profile/getall/")
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
  uploadImg(payload:string,type:string): Observable<any>{
    const base64File =payload.split(',')[1];
    const username=this.authService.getAuthenticatedUser().getUsername();
    const data = {'image': base64File,type,username};
    console.log("payload",data);
    return this.http
      .post(this.url+"/profile/upload", data)
      .pipe(catchError((error: any) => Observable.throw(error.json())));

      }
}
