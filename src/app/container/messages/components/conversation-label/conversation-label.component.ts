import { Component, OnInit,Input } from '@angular/core';
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




  constructor() { }

  ngOnInit() {

  }

}
