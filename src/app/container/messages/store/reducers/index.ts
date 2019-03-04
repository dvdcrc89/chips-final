import * as fromMessage  from './message.reducers'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface MessageSectionState{
    messageState: fromMessage.MessageState
   }

export const reducers: ActionReducerMap<any> = {
    MessageSectionState: fromMessage.reducer
}

export const getMessageFullState = createFeatureSelector<MessageSectionState>('message');

export const getMessageState = createSelector(getMessageFullState,(state:MessageSectionState)=> state.messageState);