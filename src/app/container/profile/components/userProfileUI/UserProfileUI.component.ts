import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Profile } from "src/app/models/profile.interface";

@Component({
    selector: 'userProfileUI',
    templateUrl: './userProfileUI.component.html',
    styleUrls: ['./userProfileUI.component.css'],
    
  })




  export class UserProfileUIComponent implements OnInit {
    @Input()
    profile: Profile

    coverPic: string;
    profilePic: string;
    firstName: string;
    lastName: string;
    bio: string;
    cv: string;
    bioArray: string[];
    intrests: string[];
    @Output()
    openCV: EventEmitter<any> = new EventEmitter
    
    ngOnInit(){
    
    }
   
    handleOpenCV(){
      this.openCV.emit();
    }
}