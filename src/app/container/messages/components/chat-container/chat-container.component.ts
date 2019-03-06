import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})


export class ChatContainerComponent implements OnInit {
  profile = { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"};
  job = { position: "Chef", business: "Pump House"};
  @Input()
  activeChat:Array<any>
  @Output()
  sendMessage: EventEmitter<string> = new EventEmitter()
   



  constructor() { }

  ngOnInit() {

  }
  send(message){
    console.log(message);
    this.sendMessage.emit(message);
  }

}
