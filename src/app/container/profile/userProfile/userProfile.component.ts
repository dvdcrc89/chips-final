import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Profile } from "selenium-webdriver/firefox";
import { environment } from '../../../../environments/environment';
import * as fromStore from '../store';
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute } from "@angular/router";
import * as fromRoot from '../../../store'

@Component({
    selector: 'userProfile',
    templateUrl: './userProfile.component.html',
    styleUrls: ['./userProfile.component.css'],
    
  })
  export class UserProfileComponent implements OnInit {
    isLoading$: Observable<boolean>;
    isLoaded$: Observable<boolean>;
    profile$: Observable<any>;
    constructor(
      private profileService: ProfileService,
      private store: Store<fromStore.ProfileSectionState>,

      ) { }
    ngOnInit(){
      this.isLoading$=this.store.select(fromStore.getProfileLoading);
      this.isLoaded$=this.store.select(fromStore.getProfileLoaded);
      this.profile$ = this.store.select(fromStore.getUserProfile);

      this.store.dispatch(new fromStore.LoadAllUsers);



    }
   
    openCV(){
      // this.cv$.subscribe(cv=>window.open(cv, '_blank'));
      
    }
   
}