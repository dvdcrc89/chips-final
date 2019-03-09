import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

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


  constructor(
    private store: Store<fromStore.MessageSectionState>
  ) { }

  ngOnInit() {
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
    this.store.dispatch(new fromStore.SetActiveConversation({
      him:user
    }));
    this.active$ = this.store.select(fromStore.getActiveConversationParsed)

  }
 select(){
  this.store.dispatch(new fromStore.SetActiveConversation({
    him:"pino"
  }));
  this.active$ = this.store.select(fromStore.getActiveConversationParsed)

 }
 sendMessage(message){

   this.receiver$.subscribe(
     (res):any =>{
     this.store.dispatch(new fromStore.SendMessage({
      receiver:res.him,
      job_id:res.job_id,
      text: message
    }))
    this.active$ = this.store.select(fromStore.getActiveConversationParsed)

  }
   )
 }
}
