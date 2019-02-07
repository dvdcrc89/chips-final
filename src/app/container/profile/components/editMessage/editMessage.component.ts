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
     this.message = this.message? this.message.replace(/<br>/g,"\n") :"";  
     this.reset={
        message :this.message,
     }
    }
    applyEdit(e){
        this.editMessageForm.value.message = this.editMessageForm.value.message ? this.editMessageForm.value.message.replace(/\n/g,"<br>"):"";
        this.apply.emit(this.editMessageForm.value);
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