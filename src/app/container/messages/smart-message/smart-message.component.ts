import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-smart-message',
  templateUrl: './smart-message.component.html',
  styleUrls: ['./smart-message.component.css']
})
export class SmartMessageComponent implements OnInit {
conversations$ :Observable<Array<any>>
active$ : Observable<any>
loading$:Observable<boolean>
loaded$:Observable<boolean>
receiver$:Observable<any>
showList:boolean;

  constructor(
    private store: Store<fromStore.MessageSectionState>,
    private service: MessageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.showList=true;
    this.conversations$ = this.store.select(fromStore.getList);
    this.active$ = this.store.select(fromStore.getActiveConversationParsed)
    this.loaded$ = this.store.select(fromStore.getMessageLoaded);
    this.loading$ = this.store.select(fromStore.getMessageLoaded);
    this.receiver$ = this.store.select(fromStore.getReceiver);
    this.store.dispatch(new fromStore.LoadMyself());
    this.store.dispatch(new fromStore.LoadAllConversation());

    

    console.log(this.active$);
  }
  openChat(user){
    let payload:any ={him:user.username}
    if (user.job) payload = {...payload,job_id:user.job}
    this.store.dispatch(new fromStore.SetActiveConversation(payload));
    this.active$ = this.store.select(fromStore.getActiveConversationParsed)
    this.receiver$ = this.store.select(fromStore.getReceiver);

  }
 sendMessage(message){

   this.receiver$.subscribe(
     (res):any =>{
     this.store.dispatch(new fromStore.SendMessage({
      receiver:res.him,
      job_id:res.job_id,
      text: message
    }))
    this.service.sendMessage({
      receiver:res.him,
      job_id:res.job_id,
      text: message
    }).subscribe(res=>this.router.navigate(["/jobs"]));
    // this.active$ = this.store.select(fromStore.getActiveConversationParsed)

  }
   )
 }
 triggerList(){
  this.receiver$ = of({him:false})
 }
}
