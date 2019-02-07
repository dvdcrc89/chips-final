import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'editCV',
    templateUrl: './editCV.component.html',
    styleUrls: ['./editCV.component.css'],
    
  })

    export class EditCVComponent implements OnInit {
    @Input()
    cv: string;
    @Output()
    apply: EventEmitter<any> = new EventEmitter();
    @Output()
    reset: EventEmitter<any> = new EventEmitter();

    url:any;
    @ViewChild('editCVForm') editCVForm: NgForm;
    selectedFile: File;
    errorMsg:string;
    acceptedTypes = [
      'application/pdf'
    ];
    
    ngOnInit(){
      this.url = this.cv;
  
    }
  
    applyEdit(e){
      if(this.url)
        this.apply.emit({image:this.url,type:"CV"});
    }

    resetValue(){
         this.url=this.cv;
        this.reset.emit();

      }
      onFileChanged(event) {
        
        if (event.target.files && event.target.files[0]) {
          if (this.validate(event.target.files[0])) {

            var reader = new FileReader();
        
            reader.onload = (event: ProgressEvent) => {
              this.url = (<FileReader>event.target).result;

            }
            this.errorMsg=null;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedFile = event.target.files[0]

          } else{
            this.errorMsg = 'File must be a pdf and cannot be exceed 5MB in size'

          }
          }
      }
     
    validate(file){
      return this.acceptedTypes.includes(file.type) && file.size < 5000000;


    }
    
}