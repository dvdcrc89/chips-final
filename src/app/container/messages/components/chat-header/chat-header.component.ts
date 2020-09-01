import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

    @Input()
    him:string;
  


  constructor() { }

  ngOnInit() {
    console.log(this.him)
  }

}
