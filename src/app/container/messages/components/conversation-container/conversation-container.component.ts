import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'conversation-container',
  templateUrl: './conversation-container.component.html',
  styleUrls: ['./conversation-container.component.css']
})
export class ConversationContainerComponent implements OnInit {


  @Input()
  conversations;
  @Output()
  open: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }
  openChat(e){
    this.open.emit(e);
 }
}
