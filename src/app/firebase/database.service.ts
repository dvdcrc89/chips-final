import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database'
import { Observable, of } from 'rxjs';
import { User } from 'firebase';
import { user } from '../container/tempo/user';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _database:  AngularFireDatabase ;
  get database():  AngularFireDatabase { return this._database };
  
  constructor(db: AngularFireDatabase) {
    this._database = db
   }

   getUser(user_: User): Observable<any> {
    return this.database.object(`/user/${user_.uid}`).valueChanges()
    .pipe(
      switchMap((user)=>{
        return !user ? this.setUser(user_): of(user)
      })
    )
  }

  setUser(user_: User){
    const newUser = {
      name: user_.displayName,
      email: user_.email,
      pic: user_.photoURL,
      phone: user_.phoneNumber,
    }
    return this.database.object(`/user/${user_.uid}`).set(newUser)
  }
}

