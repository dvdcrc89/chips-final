import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'editImages',
    templateUrl: './imgUpload.component.html',
    styleUrls: ['./imgUpload.component.css'],
    
  })

    export class EditImagesComponent implements OnInit {
    @Input()
    coverPic: string;
    @Input()
    profilePic: string;
    selectedFileP: File;
    selectedFileC: File
    url:any;
    @Output()
    apply: EventEmitter<any> = new EventEmitter();
    @Output()
    prev: EventEmitter<any> = new EventEmitter();
    @Output()
    prevCover: EventEmitter<any> = new EventEmitter();
    @ViewChild('editImagesForm') editImagesForm: NgForm;
    reset:any;

    
    ngOnInit(){
     this.reset={
        coverPic :this.coverPic,
        profilePic: this.profilePic,
     }
    }
    applyEdit(e){
      this.apply.emit(e);
    }

    resetValue(){

        
         this.coverPic = this.reset.coverPic ;
         this.profilePic = this.reset.profilePic ;
         this.prev.emit(this.profilePic);  
         this.prevCover.emit(this.coverPic);  


      }
      onFileChangedProfile(event) {
        
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
        
            reader.onload = (event: ProgressEvent) => {
              this.url = (<FileReader>event.target).result;
              this.prev.emit(this.url);  

            }
        
            reader.readAsDataURL(event.target.files[0]);
          }
        this.selectedFileP = event.target.files[0]
      }
      onFileChangedCover(event) {
        
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
        
            reader.onload = (event: ProgressEvent) => {
              this.url = (<FileReader>event.target).result;
              this.prevCover.emit(this.url);  
            }
        
            reader.readAsDataURL(event.target.files[0]);
          }
        this.selectedFileC = event.target.files[0]
        
      }
      
    
}