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

  
   
    
    ngOnInit(){
    
    }
   
    handleOpenCV(){
      window.open(this.profile.cv, '_blank')
    }
}