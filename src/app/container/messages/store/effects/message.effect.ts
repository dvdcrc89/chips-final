import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import * as messageAction from '../action/message.action';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as fromService from '../../services/message.service'
import { of } from 'rxjs';
import { AuthService } from 'src/app/container/user/auth.service';
import * as fromRouter from '../../../../store';
import { Store } from '@ngrx/store';

@Injectable()
export class MessageEffects{
    constructor(
        private actions$: Actions,
        private messageService: fromService.MessageService,
        private authService: AuthService,
        private storeRouter :Store<fromRouter.RouterStateUrl>
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

    //  @Effect()
    //  setActive$ = this.actions$.ofType(messageAction.LOAD_ALL_CONVERSATIONS_SUCCESS)
    //  .pipe(
    //      switchMap((action: messageAction.LoadAllConversationSuccess)=>{
    //         return this.storeRouter.select('routerReducer', 'state', 'params').pipe(
    //             map(params => {
    //                 console.log(params);
    //                 if(params.username){
    //                     let payload:any = {
    //                       him:params.username
    //                      };
    //                     if(params.job_id) payload = {...payload, job_id:params.job_id}  
    //                     console.log(payload);
    //                      of(new messageAction.SetActiveConversation(payload))
    //                     }}),
    //                      catchError(error => of(new messageAction.ReadMessageFail(error)))          
               
    //         )}
    //             ))
                            
                @Effect()
                setActive$ = this.actions$.ofType(messageAction.LOAD_ALL_CONVERSATIONS_SUCCESS)
                .pipe(
                    withLatestFrom(
                        this.storeRouter.select('routerReducer', 'state', 'params'),
                        (routerReducer, params :any) => {
                            console.log("routerReducer",routerReducer,"paramns",params);
                            if(params.username){
                                let payload:any = {
                                  him:params.username
                                 };
                                if(params.job_id) payload = {...payload, jobs_id:params.job_id} 
                            return  new messageAction.SetActiveConversation(payload)
                                
                            
                        }
                    }
                    ))
                //     switchMap(newPayload => {
                //         return this.detailService
                //         .getDetail(newPayload)
                //         .pipe(
                //             map(detail=> new DetailActions.GetDetailSuccess(detail)),
                //             catchError(error => Observable.of(new DetailActions.GetDetailFail(error)))
                //         );
                //     })
                // );
}
