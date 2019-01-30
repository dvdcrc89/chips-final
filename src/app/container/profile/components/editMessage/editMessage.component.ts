import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'editMessage',
    templateUrl: './editMessage.component.html',
    styleUrls: ['./editMessage.component.css'],
    
  })

    export class EditMessageComponent implements OnInit {
    @Input()
    message: string;
   
    @Output()
    apply: EventEmitter<any> = new EventEmitter();
 
    @ViewChild('editMessageForm') editMessageForm: NgForm;
    reset:any;

    
    ngOnInit(){
     if(!this.message) this.message="";   
     this.reset={
        message :this.message,
     }
    }
    applyEdit(e){
        this.apply.emit(this.editMessageForm.value);
    }

    resetValue(){

        console.log(this.reset);
         this.message = this.reset.message ;
    
      }
      addVariable(payload:string){
          switch (payload) {
              case "FN": this.message+= " #[First_Name]";
                  break;
                  case "LN": this.message+= " #[Last_Name]";
                  break;
                  case "PS": this.message+= " #[Position]";
                  break;
                  case "CO": this.message+= " #[Company]";
                  break;
          }
    
    }
}