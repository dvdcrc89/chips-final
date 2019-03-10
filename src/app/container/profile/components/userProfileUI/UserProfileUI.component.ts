import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Profile } from "src/app/models/profile.interface";
import { Router } from "@angular/router";

@Component({
    selector: 'userProfileUI',
    templateUrl: './userProfileUI.component.html',
    styleUrls: ['./userProfileUI.component.css'],
    
  })




  export class UserProfileUIComponent implements OnInit {
    @Input()
    profile: Profile
    constructor(private router: Router){}
    ngOnInit(){
    
    }
    message(){
      this.router.navigate(['/messages/'+this.profile.username])
    }
    handleOpenCV(){
      window.open(this.profile.cv, '_blank')
    }
}