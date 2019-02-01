import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Profile } from "selenium-webdriver/firefox";
import { environment } from '../../../../environments/environment';

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
    username:string;
    bioArray:string[];
    cv:string;
    editInfo:boolean = false;
    editMessage:boolean = false;
    editImages:boolean = false;
    editCV:boolean=false;
    constructor(
      private profileService: ProfileService
      ) { }
    ngOnInit(){
      this.profileService.getMyself().subscribe(data=>{
        this.username = data.username;
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.bio = data.bio;
        this.cv = environment.s3_imgs+this.username+"_CV"+"?"+Math.random()
        this.bioArray=this.bio ? data.bio.split("<br>") : [""]
        this.message= data.message ? data.message: "";
        this.intrests= data.intrests?  data.intrests.split(','):"";
        this.setImgs();
    
      });
    
    
      // if(this.profilePic.length<=0){
      //   this.profilePic="https://ui-avatars.com/api/?name="+this.firstName+'+'+this.lastName+'&background=0D8ABC&color=fff&size=512';
      // }
    }
    changeInfo(values){
      this.firstName=values.firstName;
      this.lastName=values.lastName;
      this.intrests=values.intrests;
      this.bio=values.bio;
      if(this.bio)
      this.bioArray=this.bio.split("\n");

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
      this.profileService.uploadImg(e.image,e.type).subscribe(data=>console.log(data));
      this.editImages=false;
    }
    toggleImages(){
      this.editImages=!this.editImages;
      this.editInfo = false;
      this.editMessage = false;
      this.editCV=false;

    }

    save(payload){
      this.profileService.editUser(payload).subscribe(data=>console.log(data));
    }

    setImgs(){
      this.profilePic = environment.s3_imgs+this.username+"_PP"+"?"+Math.random();
      this.coverPic = environment.s3_imgs+this.username+"_CP"+"?"+Math.random();
      // console.log(this.isImage(this.profilePic));
  //     if(this.profilePic.match(/\.(jpeg|jpg|gif|png)$/)!==null){
  //          this.profilePic="https://ui-avatars.com/api/?name="+this.firstName+'+'+this.lastName+'&background=0D8ABC&color=fff&size=512';
  //   }
  //   if(this.coverPic.match(/\.(jpeg|jpg|gif|png)$/)!==null){
  //     this.coverPic="https://picsum.photos/2000/800";
  // }
      console.log(this.profilePic,this.coverPic);

    }
    // isImage(url){
    //   return (url.match(/\.(jpg|gif|png)$/)!= null);

    // }
}