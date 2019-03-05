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
                const groupBy = (xs, key) =>{
                    return xs.reduce(function(rv, x) {
                      (rv[x[key]] = rv[x[key]] || []).push(x);
                      return rv;
                    }, {});
                  }
                const createConvList = (list)=>{ 
                    let conversationList =[]
                    for (var key in list) {
                        if (list.hasOwnProperty(key)) {
                            let sortMessages=list[key].sort((a,b)=>b.Created_at-a.Created_at);
                            let lastMessage = sortMessages[0];
                            let unread = sortMessages.filter(message=>!message.Read).length;
                            let jobsId = lastMessage.Jobs_id ? lastMessage.Jobs_id :"DM" ;
                            let whoIsHim =
                                lastMessage.Sender !== action.username ? lastMessage.Sender:lastMessage.Receiver;
                            conversationList.push ({
                                conversation_id:key,
                                lastMessageTime:lastMessage.Created_at,
                                lastMessageTrunc: lastMessage.Text.substring(0,18),
                                unread,
                                jobsId,
                                profile:{
                                    profilePic:"https://s3.eu-west-2.amazonaws.com/chips-files-storage/"+whoIsHim+"_PP",
                                    firstName:"Sandro",
                                    lastName:"Sandro"
                                }

                            })
                        }
                 }
                return conversationList;
                }
                let messages=action.payload
                let allConversationsMessage = groupBy(action.payload,"Conversation_id");
                let conversationsList = 
                    createConvList(allConversationsMessage).sort((a,b)=>b.lastMessageTime - a.lastMessageTime);

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

