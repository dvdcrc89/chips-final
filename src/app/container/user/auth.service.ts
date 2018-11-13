import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../models/user.model';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from "amazon-cognito-identity-js";
import { environment } from '../../../environments/environment';

const POOL_DATA = {
  UserPoolId: environment.UserPoolId,
  ClientId: environment.ClientId
};
const userPool =  new CognitoUserPool(POOL_DATA);

@Injectable()
export class AuthService {
  authIsLoading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  authStatusChanged = new Subject<boolean>();
  registeredUser: CognitoUser;

  constructor(private router: Router) {}
  signUp(username: string, email: string, password: string): void {
    this.authIsLoading.next(true);
    const user: User = {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: password
    };
    const emailAttribute = {
      Name: 'email',
      Value: user.email.toLowerCase()
    };
    const attrList: CognitoUserAttribute[] = [];
    attrList.push(new CognitoUserAttribute(emailAttribute));
    userPool.signUp(user.username.toLowerCase(),user.password,attrList,null,(err,res)=>{
      if(err){
        console.log(err);
        this.authDidFail.next(true);
        this.authIsLoading.next(false);
        return;
      }
      this.authDidFail.next(false);
      this.authIsLoading.next(false);
      this.registeredUser = res.user;
      this.router.navigate(['/validate']);

    })
  
    return;
  }

  confirmUser(username: string, code: string) {
    this.authIsLoading.next(true);
    const userData = {
      Username: username.toLowerCase(),
      Pool: userPool
    };
    const cognitUser = new CognitoUser(userData);
    cognitUser.confirmRegistration(code,true,(err,res)=>{
        if(err){
          console.log(err);
          this.authDidFail.next(true);
          this.authIsLoading.next(false);
          return;
        }
        this.authDidFail.next(false);
        this.authIsLoading.next(false);
        this.router.navigate(['/']);
    })
  }

  signIn(username: string, password: string): void {
    this.authIsLoading.next(true);
    const authData = {
      Username: username.toLowerCase(),
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username.toLowerCase(),
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    const that = this;
    cognitoUser.authenticateUser(authDetails,{
      onSuccess(res: CognitoUserSession){
        that.authStatusChanged.next(true);
        that.authDidFail.next(false);
        that.authIsLoading.next(false);
        console.log("Good",res);
        that.authStatusChanged.next(true);
        that.router.navigate(['/jobs']);


      },
      onFailure(err){
        if(err.code === "UserNotConfirmedException"){
          that.router.navigate(['/validate']);
        }
  
        that.authDidFail.next(true);
        that.authIsLoading.next(false);
        console.log("Bad",err);

      }
    });
    return;
  }
  getAuthenticatedUser() {
    return userPool.getCurrentUser();
  }
  logout() {
    this.getAuthenticatedUser().signOut();
    this.authStatusChanged.next(false);
  }
  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err,session)=>{
            if(err){
              console.log("error authenticated",err);
              observer.next(false);
            } else {
               if(session.isValid()){
                console.log("valid authenticated");
                 observer.next(true);
               } else {
                console.log("invalid authenticated");
                 observer.next(false);
               }
            }
        });
      }
      observer.complete();
    });
    return obs;
  }
  initAuth() {
    this.isAuthenticated().subscribe(
      (auth) => this.authStatusChanged.next(auth)
    );
  }
}
