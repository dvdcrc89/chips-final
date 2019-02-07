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
    @Output()
    reset: EventEmitter<any> = new EventEmitter();
    @ViewChild('editInfoForm') editInfoForm: NgForm;
    formChangesSubscription:any;

    intrestList:string[]= [
        'Chef','Waiter','Waitress','Barista','KP','Managment','Receptionist','Sommelier','Head Chef',
        'Assistant Manager','Sous Chef','Bartender'
    ]
    ngOnInit(){
        this.bio=this.bio.replace(/<br>/g,"\n")
    }
    applyEdit(e){
        this.editInfoForm.value.bio = this.editInfoForm.value.bio.replace(/\n/g,"<br>");
        this.apply.emit(this.editInfoForm.value);
    }
     
    
    }