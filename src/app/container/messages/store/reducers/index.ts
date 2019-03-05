import * as fromMessage  from './message.reducers'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface MessageSectionState{
    messageState: fromMessage.MessageState
   }

export const reducers: ActionReducerMap<MessageSectionState> = {
    messageState: fromMessage.reducer
}

export const getMessageFullState = createFeatureSelector<MessageSectionState>('messages');

export const getMessageState = createSelector(getMessageFullState,(state:MessageSectionState)=> state.messageState);
