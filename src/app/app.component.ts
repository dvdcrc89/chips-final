declare var google;
import { Component } from '@angular/core';
import {JobcardComponent} from './container/jobs/components/jobcard/jobcard.component'
import {Job} from '../app/models/job.interface'
import { empty, Observable } from 'rxjs';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/container/user/auth.service';
import {} from '@types/googlemaps';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ProfileSectionState } from './container/profile/store';
import { Store } from '@ngrx/store';
import * as fromStore from '../app/container/profile/store';
import { Profile } from './models/profile.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated = false;
  username:string;
  profilePic:string;
  profiles$:Observable<Profile[]>
  authenticatedPage=['/jobs','/addjob','jobs/1'];
  constructor(private location: Location,
              private authService: AuthService,
              private store: Store<fromStore.ProfileSectionState>,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.authStatusChanged.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // if (authenticated && !this.authenticatedPage.includes(this.location.path())) {
       
        //   this.router.navigate(['/jobs']);
        // } 
        // else if(!authenticated && this.authenticatedPage.includes(this.location.path())) {
        //   this.router.navigate(['/']);
        // }
      }
    );
    this.authService.initAuth();
    this.username= this.authService.getAuthenticatedUser().getUsername();
    this.profilePic= environment.s3_imgs+this.authService.getAuthenticatedUser().getUsername()+"_PP"+"?"+Math.random();
    this.profiles$ = this.store.select(fromStore.getAllUsersProfile);

    this.store.dispatch(new fromStore.LoadAllUsers);
  }
 
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

