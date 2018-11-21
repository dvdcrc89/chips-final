declare var google;
import { Component } from '@angular/core';
import {JobcardComponent} from './container/jobs/components/jobcard/jobcard.component'
import {Job} from '../app/models/job.interface'
import { empty } from 'rxjs';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/container/user/auth.service';
import {} from '@types/googlemaps';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated = false;
  username:string;
  authenticatedPage=['/jobs','/addjob','jobs/1'];
  constructor(private location: Location,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.authService.getAuthenticatedUser())
    this.authService.authStatusChanged.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        console.log(this.router.url)

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
  }
 
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

