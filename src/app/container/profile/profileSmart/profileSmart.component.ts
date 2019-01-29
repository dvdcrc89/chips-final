import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'profile',
    templateUrl: './profileSmart.component.html',
    styleUrls: ['./profileSmart.component.css'],
    
  })
  export class ProfileComponent implements OnInit {
  
    coverPic:string;
    profilePic:string;
    fullName:string;
    intrests:string[];
    bio:string;

    ngOnInit(){
      this.coverPic="../../../../../assets/cover.jpg";
      this.profilePic="../../../../assets/profile.jpg";
      this.fullName="Samantha La Porca";
      this.intrests=["Waitress","Bartender","Receptionist"];
      this.bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    }
    changeInfo(values){
      this.fullName=values.fullName;
      this.intrests=values.intrests;
      this.bio=values.bio;

    }
}