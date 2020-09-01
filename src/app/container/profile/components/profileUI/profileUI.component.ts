import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
    name: string;
    @Input()
    bio: string;
    @Input()
    bioArray: string[];
    @Input()
    intrests: string[];
    @Output()
    openCV: EventEmitter<any> = new EventEmitter
    
    ngOnInit(){


    }
    handleOpenCV(){
      this.openCV.emit();
    }
}