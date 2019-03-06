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
//  conversations=[{ 
//    profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
//  },{ 
//   profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//   profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
// },{ 
//   profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
// },{ 
//   profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
// },{ 
//   profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
// },{ 
//  profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
// job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
// }]
  constructor(
    private store: Store<fromStore.MessageSectionState>
  ) { }

  ngOnInit() {
    this.conversations$ = this.store.select(fromStore.getList);
    this.active$ = this.store.select(fromStore.getActiveConversationParsed)
    this.loaded$ = this.store.select(fromStore.getMessageLoaded);
    this.loading$ = this.store.select(fromStore.getMessageLoaded);
    this.store.dispatch(new fromStore.LoadMyself());
    this.store.dispatch(new fromStore.LoadAllConversation());

    

    console.log(this.active$);
  }
  
 select(){
  this.store.dispatch(new fromStore.SetActiveConversation({
    him:"davidesala"
  }));
 }
}
