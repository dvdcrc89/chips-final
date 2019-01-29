import { Component, OnInit } from "@angular/core";


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

    editInfo:boolean = false;

    ngOnInit(){
      this.coverPic="../../../../../assets/cover.jpg";
      this.profilePic="../../../../assets/profile.jpg";
      this.firstName="Samantha";
      this.lastName="La Porca"
      this.intrests=["Waitress","Bartender","Receptionist"];
      this.bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
    toggleInfo(){
      this.editInfo = !this.editInfo;
    }
}