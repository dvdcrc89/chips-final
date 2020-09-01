import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DatabaseService } from "src/app/firebase/database.service";
import { FirebaseService } from "src/app/firebase/firebase.auth.service";


@Injectable()
export class ProfileFirebaseService {
  constructor(private db: DatabaseService, private auth: FirebaseService) {}
  
  getMyself(): Observable<any> {
    return this.db.getUser(this.auth.user);
  }
  
}
