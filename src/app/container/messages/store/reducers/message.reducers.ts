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
    switch (action.type) {
        case fromMessage.LOAD_ALL_CONVERSATIONS:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case fromMessage.LOAD_ALL_CONVERSATIONS_SUCCESS:
            {
                // let conversationsList = action.payload;
                let conversationsList = []
                let allConversationsMessage =[]
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    conversationsList,
                    allConversationsMessage
                }
            }
        case fromMessage.LOAD_ALL_CONVERSATIONS_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromMessage.SEND_MESSAGE:
            {
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
            }
        case fromMessage.SEND_MESSAGE_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromMessage.SEND_MESSAGE_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: true
                }
            }
            case fromMessage.READ_MESSAGE:
            {
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
            }
        case fromMessage.READ_MESSAGE_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromMessage.READ_MESSAGE_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: true
                }
            }
    
    }

    return state;
}

export const getMessageLoading = (state: MessageState) => state.loading;
export const getMessageLoaded = (state: MessageState) => state.loaded;
export const getAllConversationsMessages = (state: MessageState) => state.allConversationsMessage;
export const getConversationsList = (state: MessageState) => state.conversationsList;

