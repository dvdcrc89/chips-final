import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'editInfo',
    templateUrl: './editInfo.component.html',
    styleUrls: ['./editInfo.component.css'],
    
  })

    export class EditInfoComponent implements OnInit {
    @Input()
    firstName: string;
    @Input()
    lastName: string;
    @Input()
    bio: string;
    @Input()
    intrests: string[];
    @Output()
    apply: EventEmitter<any> = new EventEmitter();
    @Output()
    mod: EventEmitter<any> = new EventEmitter(); 
    @ViewChild('editInfoForm') editInfoForm: NgForm;
    formChangesSubscription:any;
    reset:any;

    intrestList:string[]= [
        'Chef','Waiter','Waitress','Barista','KP','Managment','Receptionist','Sommelier','Head Chef',
        'Assistant Manager','Sous Chef','Bartender'
    ]
    ngOnInit(){
     this.reset={
        firstName :this.firstName,
        lastName :this.lastName,
        bio : this.bio,
        intrests : this.intrests,
     }
     this.formChangesSubscription = this.editInfoForm.form.valueChanges.subscribe(values => {
         this.modEmit(values);
        
        
      })
    }
    applyEdit(e){
        console.log(this.editInfoForm.value);
    }

    resetValue(){

        console.log(this.reset);
         this.firstName = this.reset.firstName ;
         this.lastName = this.reset.lastName ;
         this.bio = this.reset.bio ;
         this.intrests=this.reset.intrests;
      }
     
      modEmit(values){
        this.mod.emit(values);
      }
    }