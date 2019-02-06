import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Profile } from "selenium-webdriver/firefox";
import { environment } from '../../../../environments/environment';
import * as fromStore from '../store';
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
    selector: 'profile',
    templateUrl: './profileSmart.component.html',
    styleUrls: ['./profileSmart.component.css'],
    
  })
  export class ProfileComponent implements OnInit {
    isLoading$: Observable<boolean>;
    isLoaded$: Observable<boolean>;
    coverPic$:Observable<string>;
    profilePic$:Observable<string>;
    firstName$:Observable<string>;
    lastName$:Observable<string>;
    intrests$:Observable<string[]>;
    bio$:Observable<string>;
    message$:Observable<string>;
    username$:Observable<string>;
    bioArray$:Observable<string[]>;
    cv$:Observable<string>;
    editInfo:boolean = false;
    editMessage:boolean = false;
    editImages:boolean = false;
    editCV:boolean=false;
    constructor(
      private profileService: ProfileService,
      private store: Store<fromStore.ProfileSectionState>
      ) { }
    ngOnInit(){
      this.isLoading$=this.store.select(fromStore.getProfileLoading);
      this.isLoaded$=this.store.select(fromStore.getProfileLoaded);
      this.username$ = this.store.select(fromStore.getMyUsername);
      this.firstName$=this.store.select(fromStore.getMyName);
      this.lastName$=this.store.select(fromStore.getMyLastName);
      this.bio$ = this.store.select(fromStore.getMyBio);
      this.profilePic$ = this.store.select(fromStore.getMyPP);
      this.coverPic$ = this.store.select(fromStore.getMyCP);
      this.cv$ = this.store.select(fromStore.getMyCV);
      this.bioArray$=this.store.select(fromStore.getMyBioArray);
      this.message$= this.store.select(fromStore.getMyMessage);
      this.intrests$= this.store.select(fromStore.getMyIntrests);
      this.store.dispatch(new fromStore.LoadMyself);
      

    }
    reset(){
      this.profilePic$ = this.store.select(fromStore.getMyPP);
      this.coverPic$ = this.store.select(fromStore.getMyCP);
    }
    doPreviewProfile(url){
      this.profilePic$= of(url);
    }
    doPreviewCover(url){
      this.coverPic$=of(url);
    }
    applyInfo(profile){

      let intrests = profile.intrests ? profile.intrests.toString(): "";
      profile = {
        ...profile,
        intrests
      }
      this.save(profile);
      this.toggleInfo();
    }
    toggleInfo(){
      this.editInfo = !this.editInfo;
      this.editMessage = false;
      this.editImages=false;
      this.editCV=false;
    }
    toggleCV(){
      this.editCV= !this.editCV;
      this.editInfo = false;
      this.editMessage = false;
      this.editImages=false;
    }
    applyMessage(e){
      console.log(e);
      this.save(e);
      this.toggleMessage();
    }
    toggleMessage(){
      this.editMessage = !this.editMessage;
      this.editInfo = false;
      this.editImages=false;
      this.editCV=false;

    }
    applyImages(e){
      this.store.dispatch(new fromStore.UploadFile(e.image,e.type));  

      // this.profileService.uploadImg(e.image,e.type).subscribe(data=>console.log(data));
      this.editImages=false;
    }
    toggleImages(){
      this.editImages=!this.editImages;
      this.editInfo = false;
      this.editMessage = false;
      this.editCV=false;

    }
    openCV(){
      this.cv$.subscribe(cv=>window.open(cv, '_blank'));
      
    }
    save(payload){
      this.store.dispatch(new fromStore.EditInfo(payload));  
    }

  //   setImgs(){
  //     this.profilePic = environment.s3_imgs+this.username+"_PP"+"?"+Math.random();
  //     this.coverPic = environment.s3_imgs+this.username+"_CP"+"?"+Math.random();
  //     // console.log(this.isImage(this.profilePic));
  // //     if(this.profilePic.match(/\.(jpeg|jpg|gif|png)$/)!==null){
  // //          this.profilePic="https://ui-avatars.com/api/?name="+this.firstName+'+'+this.lastName+'&background=0D8ABC&color=fff&size=512';
  // //   }
  // //   if(this.coverPic.match(/\.(jpeg|jpg|gif|png)$/)!==null){
  // //     this.coverPic="https://picsum.photos/2000/800";
  // // }
  //     console.log(this.profilePic,this.coverPic);

  //   }
  //   // isImage(url){
  //   //   return (url.match(/\.(jpg|gif|png)$/)!= null);

  //   // }
}