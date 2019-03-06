import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import * as messageAction from '../action/message.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromService from '../../services/message.service'
import { of } from 'rxjs';
import { AuthService } from 'src/app/container/user/auth.service';

@Injectable()
export class MessageEffects{
    constructor(
        private actions$: Actions,
        private messageService: fromService.MessageService,
        private authService: AuthService
        ) {}
    
    @Effect()
    loadAllConversation$ = this.actions$.ofType(messageAction.LOAD_ALL_CONVERSATIONS)
     .pipe(
         switchMap(()=>{
            return this.messageService.getAllMessages().pipe(
                map(messages => new messageAction.LoadAllConversationSuccess(messages,this.authService.getAuthenticatedUser().getUsername())),
                catchError(error => of(new messageAction.LoadAllConversationFail(error)))          
         )}
     ))

     @Effect()
    send$ = this.actions$.ofType(messageAction.SEND_MESSAGE)
     .pipe(
         switchMap((action: messageAction.SendMessage)=>{
            return this.messageService.sendMessage(action.payload).pipe(
                map(res => new messageAction.SendMessageSuccess()),
                catchError(error => of(new messageAction.SendMessageFail(error)))          
         )}
     ))
     @Effect()
     read$ = this.actions$.ofType(messageAction.READ_MESSAGE)
     .pipe(
         switchMap((action: messageAction.ReadMessage)=>{
            return this.messageService.read(action.payload).pipe(
                map(res => new messageAction.ReadMessageSuccess()),
                catchError(error => of(new messageAction.ReadMessageFail(error)))          
         )}
     ))

     @Effect()
     username$ = this.actions$.ofType(messageAction.LOAD_MYSELF)
     .pipe(
         switchMap((action: messageAction.LoadMyself)=>{
            return of(this.authService.getAuthenticatedUser().getUsername()).pipe(
                map(res => new messageAction.LoadMyselfSuccess(res)),
                catchError(error => of(new messageAction.ReadMessageFail(error)))          
         )}
     ))
     
      
}
