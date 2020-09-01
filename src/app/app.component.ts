import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../app/container/user/auth.service';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import * as fromStore from '../app/container/profile/store';
import { Profile } from './models/profile.interface';
import { FirebaseService } from './firebase/firebase.auth.service';
import { User } from 'firebase';
import { DatabaseService } from './firebase/database.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;
  isAuthenticated = false;
  username:string;
  profilePic:string;
  profiles$:Observable<Profile[]>
  loaded: boolean;
  authenticatedPage=['/jobs','/addjob','jobs/1'];
  constructor(private authFirebase: FirebaseService,
              private store: Store<fromStore.ProfileSectionState>,
              private router: Router,
              private db: DatabaseService
              ) {
  }

  ngOnInit() {
    this.authFirebase.init(
      (authenticated) => {
        this.isAuthenticated = !!authenticated;
        this.user = authenticated;
        console.log(this.user);
        this.loaded = true;
        this.store.dispatch(new fromStore.LoadMyself);
      }
    );
  }
 
  onLogout() {
    this.authFirebase.AuthLogout();
    this.router.navigate(['/']);
  }
}

