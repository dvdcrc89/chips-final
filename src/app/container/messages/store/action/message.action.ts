import {Action} from '@ngrx/store'
// import { Message } from '../../../../models/Message.interface';

export const LOAD_ALL_CONVERSATIONS = '[Conversation[]] Load All Conversation';
export const LOAD_ALL_CONVERSATIONS_SUCCESS = '[Conversation[]] Load All Conversation Success';
export const LOAD_ALL_CONVERSATIONS_FAIL = '[Conversation[]] Load All Conversation Fail';
export const SEND_MESSAGE = '[Message] Send Message';
export const SEND_MESSAGE_FAIL = '[Message] Send Message Fail';
export const SEND_MESSAGE_SUCCESS = '[Message] Send Message Success';
export const READ_MESSAGE = '[Conversation] Read Message';
export const READ_MESSAGE_FAIL = '[Conversation] Read Message Fail';
export const READ_MESSAGE_SUCCESS = '[Conversation] Read Message Success';
export const SET_ACTIVE_CONVERSATION = '[Conversation Set Active Conversation';
export const LOAD_MYSELF = '[String] Load Myself';
export const LOAD_MYSELF_SUCCESS = '[String] Load Myself Success';



export class SetActiveConversation implements Action {
    readonly type = SET_ACTIVE_CONVERSATION;
    constructor(public payload: any){}

}

export class LoadAllConversation implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS;
}
export class LoadAllConversationFail implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS_FAIL;
    constructor(public payload: any){}
}

export class LoadAllConversationSuccess implements Action {
    readonly type = LOAD_ALL_CONVERSATIONS_SUCCESS;
    constructor(public payload: any[],public username:string){}
}
//
export class SendMessage implements Action {
    readonly type = SEND_MESSAGE;
    constructor(public payload: any){}

}
export class SendMessageFail implements Action {
    readonly type = SEND_MESSAGE_FAIL;
    constructor(public payload: any){}
}

export class SendMessageSuccess implements Action {
    readonly type = SEND_MESSAGE_SUCCESS;
}
//
export class ReadMessage implements Action {
    readonly type = READ_MESSAGE;
    constructor(public payload: any){}

}
export class ReadMessageFail implements Action {
    readonly type = READ_MESSAGE_FAIL;
    constructor(public payload: any){}
}

export class ReadMessageSuccess implements Action {
    readonly type = READ_MESSAGE_SUCCESS;
}

export class LoadMyself implements Action {
    readonly type = LOAD_MYSELF;
}

export class LoadMyselfSuccess implements Action {
    readonly type = LOAD_MYSELF_SUCCESS;
    constructor(public payload: string){}

}


//action types

export type MessageAction = 
LoadAllConversation 
| LoadAllConversationFail 
| LoadAllConversationSuccess 
| SendMessage 
| SendMessageFail 
| SendMessageSuccess
| ReadMessage 
| ReadMessageFail 
| ReadMessageSuccess
| SetActiveConversation
| LoadMyself
| LoadMyselfSuccess