import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../user/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient,private authService: AuthService) {}
  
  url:string = environment.backendUrl;
  endPoints:any;
  getAllMessages(): Observable<any[]> {
    const username=this.authService.getAuthenticatedUser().getUsername();
    return this.http
      .get<any[]>(this.url+"/messages/get/"+username)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }


  read(payload: any): Observable<any> {
    const username = this.authService.getAuthenticatedUser().getUsername();
    const conversationToRead =payload
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin','*');
    return this.http
      .post<any>(this.url+"/messages/read", JSON.stringify(conversationToRead),{headers:headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  sendMessage(payload: any): Observable<any> {
    const sender = this.authService.getAuthenticatedUser().getUsername();
    const message = {...payload,sender}
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin','*');
    return this.http
      .post<any>(this.url+"/messages/read", JSON.stringify(message),{headers:headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));;
  }
}
