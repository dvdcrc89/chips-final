import { Component, OnInit,Input, EventEmitter,Output, } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'message-textarea',
  templateUrl: './message-textarea.component.html',
  styleUrls: ['./message-textarea.component.css']
})
export class MessageTextAreaComponent implements OnInit {
message:string;
@Output()
sendMessage: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }
 send(){
   console.log(this.message);
   this.sendMessage.emit(this.message);
   this.message="";
 }
}
