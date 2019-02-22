import { Component, OnInit,Input } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

messages = [{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","Volevo loren ipsum loren ipsum loren ipsum.","In fact, loren ipsume lore uplum loren ulns?","fuck you","Gino Pino"],
  isMe:false
},{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:false
},{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:false
},{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:false
},{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:true
},{
  text:["ciao bello"],
  isMe:true
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:false
},{
  text:["ciao bello"],
  isMe:false
},{
  text:["ciao come va?","how are you?","zzo vuoi?","fuck you"],
  isMe:true
},]
  

  constructor() { }

  ngOnInit() {

  }

}
