import * as fromMessage from '../action/message.action'

export interface MessageState {
    conversationsList:any[],
    activeConversation:any,
    allConversationsMessage: any[]    
    loaded: boolean,
    loading: boolean
}

export const initialState: MessageState = {
    conversationsList:[],
    activeConversation:{},
    allConversationsMessage: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromMessage.MessageAction
): MessageState {
    return;
}