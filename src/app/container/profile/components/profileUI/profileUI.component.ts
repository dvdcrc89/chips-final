import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'profileUI',
    templateUrl: './profileUI.component.html',
    styleUrls: ['./profileUI.component.css'],
    
  })




  export class ProfileUIComponent implements OnInit {
  @Input()
    coverPic: string;
    @Input()
    profilePic: string;
    @Input()
    fullName: string;
    @Input()
    bio: string;
    @Input()
    intrests: string[];
    
    ngOnInit(){

    }
}