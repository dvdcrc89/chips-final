import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public user: User;
  
  constructor(public afAuth:  AngularFireAuth, public  router:  Router) { 
    this.init(user => {
      this.user = user
    });
  }

  init(callback_: ((User) => any)) {
    return this.afAuth.onAuthStateChanged(callback_)
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log(result);
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  AuthLogout(){
    return this.afAuth.signOut();
  }

  isAuthenticated(){
    return this.afAuth.currentUser;
  }
}
