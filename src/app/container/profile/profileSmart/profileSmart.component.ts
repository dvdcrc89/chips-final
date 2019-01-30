import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Profile } from "selenium-webdriver/firefox";


@Component({
    selector: 'profile',
    templateUrl: './profileSmart.component.html',
    styleUrls: ['./profileSmart.component.css'],
    
  })
  export class ProfileComponent implements OnInit {
  
    coverPic:string;
    profilePic:string;
    firstName:string;
    lastName:string;
    intrests:string[];
    bio:string;
    message:string;

    editInfo:boolean = false;
    editMessage:boolean = false;
    editImages:boolean = false;
    constructor(
      private profileService: ProfileService
      ) { }
    ngOnInit(){
      this.profileService.getMyself().subscribe(data=>{
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.bio = data.bio;
        this.message= data.message ? data.message: "";
        this.intrests= data.intrests?  data.intrests.split(','):"";
      });
      this.coverPic="../../../../../assets/cover.jpg";
      this.profilePic="../../../../assets/profile.jpg";
    
    
      if(this.profilePic.length<=0){
        this.profilePic="https://ui-avatars.com/api/?name="+this.firstName+'+'+this.lastName+'&background=0D8ABC&color=fff&size=512';
      }
    }
    changeInfo(values){
      this.firstName=values.firstName;
      this.lastName=values.lastName;
      this.intrests=values.intrests;
      this.bio=values.bio;

    }
    doPreviewProfile(url){
      this.profilePic=url;
    }
    doPreviewCover(url){
      this.coverPic=url;
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

    }
    applyImages(e){
      this.toggleImages();
    }
    toggleImages(){
      this.editImages=!this.editImages;
      this.editInfo = false;
      this.editMessage = false;

    }

    save(payload){
      this.profileService.editUser(payload).subscribe(data=>console.log(data));
    }
}