import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})


export class ChatContainerComponent implements OnInit {
  @Input()
  him:any;
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
