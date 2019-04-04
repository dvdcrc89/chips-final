import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromMessage from '../reducers/message.reducers'
import { environment } from "src/environments/environment";

export const getList = createSelector(fromFeature.getMessageState,fromMessage.getConversationsList);
export const getAllConversation = createSelector(fromFeature.getMessageState,fromMessage.getAllConversationsMessages);

export const getActiveConversation = createSelector(fromFeature.getMessageState,fromMessage.getActiveConversation);
export const getUsername = createSelector(fromFeature.getMessageState,fromMessage.getUsername);
export const getReceiver = createSelector(fromFeature.getMessageState,fromMessage.getReceiver);

export const getActiveConversationParsed = createSelector(getActiveConversation,getUsername,(conversation,username):Array<any>=>{
    console.log(conversation,username)
    let parsedConversation = conversation.map((message)=>{
        if(message.Sender===username)
            return {...message,isMe:true}
        else
            return {...message,isMe:false}

    })
    return parsedConversation.sort((a,b)=>a.Created_at-b.Created_at);

});

export const getMessageLoaded = createSelector(fromFeature.getMessageState,fromMessage.getMessageLoaded);
export const getMessageLoading = createSelector(fromFeature.getMessageState,fromMessage.getMessageLoading);