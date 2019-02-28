import {Action} from '@ngrx/store'
import { Profile } from '../../../../models/profile.interface';

export const LOAD_ALL_CONVERSATIONS = '[Conversation[]] Load All Conversation';
export const LOAD_ALL_CONVERSATIONS_SUCCESS = '[Conversation[]] Load All Conversation Success';
export const LOAD_ALL_CONVERSATIONS_FAIL = '[Conversation[]] Load All Conversation Fail';

export class LoadAllConversation implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS;
}
export class LoadAllConversationfFail implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS_FAIL;
    constructor(public payload: any){}
}

export class LoadAllConversationSuccess implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS_SUCCESS;
    constructor(public payload: any[]){}

}




export type MessageAction = {

 
    
    
}