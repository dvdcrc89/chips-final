import * as fromMessage from '../action/message.action'

export interface MessageState {
    conversationsList:any[],
    activeConversation:any,
    allConversationsMessage: any[]    
    loaded: boolean,
    loading: boolean,
    username: string,
    receiver: any;

}

export const initialState: MessageState = {
    conversationsList:[],
    activeConversation:[],
    allConversationsMessage: [],
    loaded: false,
    loading: false,
    username: "",
    receiver:{}

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
                    let conversationList =[];
                    if(state.conversationsList.length>0)
                        conversationList.push(state.conversationsList[0]);
                    for (var key in list) {
                        if (list.hasOwnProperty(key)) {
                            let sortMessages=list[key].sort((a,b)=>b.Created_at-a.Created_at);
                            let lastMessage = sortMessages[0];
                            let unread = sortMessages.filter(message=>!message.Read).length;
                            let jobsId = lastMessage.Job_id ? lastMessage.Job_id :null ;
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
                                    lastName:"Sandro",
                                    username:whoIsHim
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
                
                // let activeConversation = allConversationsMessage[Object.keys(allConversationsMessage)[0]]
                // let receiver = activeConversation[0].profile.username
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    conversationsList,
                    allConversationsMessage,
                   
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
        case fromMessage.SET_ACTIVE_CONVERSATION:
            {
                let prefix = action.payload.job_id ? action.payload.job_id : "DM";
                let users = [state.username,action.payload.him].sort();
                let conversation_id =prefix+"_"+users[0]+"_"+users[1]; 
                let activeConversation;
                let conversationsList = state.conversationsList;
                console.log("id",conversation_id,state.allConversationsMessage);
                let allConversationsMessage = state.allConversationsMessage;
                if(allConversationsMessage.hasOwnProperty(conversation_id)){
                    activeConversation = allConversationsMessage[conversation_id]
                } else{
                    activeConversation = {[conversation_id]:[]}
                    allConversationsMessage = {...allConversationsMessage,...activeConversation};
                    let newList = [{
                            conversation_id,
                            lastMessageTime: 0,
                            jobsId:prefix,
                            profile:{
                                profilePic:"https://s3.eu-west-2.amazonaws.com/chips-files-storage/"+action.payload.him+"_PP",
                                firstName:"Sandro",
                                lastName:"Sandro",
                                username:action.payload.him
                            }
                    }]
                    conversationsList = newList.concat(state.conversationsList)
                    console.log("conversationList",conversationsList)
                    
                }
                let receiver :any = {
                    him: action.payload.him
                }
                if(prefix!=="DM"){
                    receiver = {...receiver,job_id:prefix}
                }
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    conversationsList,
                    activeConversation,
                    allConversationsMessage,
                    receiver

                }
            }
            case fromMessage.LOAD_MYSELF:
            {
                return {
                    ...state,
                    loading: true
                }
            }
            case fromMessage.LOAD_MYSELF_SUCCESS:
            {
                let username = action.payload;
                   
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    username
                }
            }
    
    }

    return state;
}

export const getMessageLoading = (state: MessageState) => state.loading;
export const getMessageLoaded = (state: MessageState) => state.loaded;
export const getAllConversationsMessages = (state: MessageState) => state.allConversationsMessage;
export const getConversationsList = (state: MessageState) => state.conversationsList;
export const getActiveConversation = (state: MessageState) => state.activeConversation;
export const getUsername = (state: MessageState) => state.username;
export const getReceiver = (state: MessageState) => state.receiver;



