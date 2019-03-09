import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'conversation-label',
  templateUrl: './conversation-label.component.html',
  styleUrls: ['./conversation-label.component.css']
})
export class ConversationLabelComponent implements OnInit {

    @Input()
    profile:Profile;
    @Input()
    newMessages:number;
    @Input()
    job:any;
    @Input()
    troncMessage:string;
    @Output()
    open: EventEmitter<any> = new EventEmitter()



  constructor() { }

  ngOnInit() {

  }
 openChat(){
   let payload:any ={username:this.profile.username}
   if (this.job) payload = {...payload,job:this.job}
    this.open.emit(payload)
 }
}
