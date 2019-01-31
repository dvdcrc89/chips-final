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
    @Output()
    apply: EventEmitter<any> = new EventEmitter();
    @Output()
    prev: EventEmitter<any> = new EventEmitter();
    @Output()
    prevCover: EventEmitter<any> = new EventEmitter();
    @ViewChild('editImagesForm') editImagesForm: NgForm;
    reset:any;
    selectedFileP: File;
    selectedFileC: File
    urlP:any;
    urlC:any;
    errorMsg:string;
    errorMsgP:string;
    acceptedTypes = [
      'image/gif',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];
    
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
         this.profilePic = this.reset.profilePic;
         this.selectedFileC = null;
         this.selectedFileP = null;
         this.urlC= null;
         this.urlP=null;
         this.prev.emit(this.profilePic);  
         this.prevCover.emit(this.coverPic);  


      }
      onFileChangedProfile(event) {
        
        if (event.target.files && event.target.files[0]) {
          if (this.validate(event.target.files[0])) {

            var reader = new FileReader();
        
            reader.onload = (event: ProgressEvent) => {
              this.urlP = (<FileReader>event.target).result;
              this.prev.emit(this.urlP);  

            }
            this.errorMsgP=null;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedFileP = event.target.files[0]

          } else{
            this.errorMsgP = 'File must be jpg, png, or gif and cannot be exceed 5MB in size'

          }
          }
      }
      onFileChangedCover(event) {
        
        if (event.target.files && event.target.files[0]) {
          if (this.validate(event.target.files[0])) {
            var reader = new FileReader();
        
            reader.onload = (event: ProgressEvent) => {
              this.urlC = (<FileReader>event.target).result;
              this.prevCover.emit(this.urlC);  
            }
        
            reader.readAsDataURL(event.target.files[0]);
            this.errorMsg = null;
            this.selectedFileC = event.target.files[0]

          } else{
            this.errorMsg = 'File must be jpg, png, or gif and cannot be exceed 5MB in size'

          }}
        console.log(this.selectedFileC);
      }
      
    validate(file){
      return this.acceptedTypes.includes(file.type) && file.size < 5000000;


    }
    
}