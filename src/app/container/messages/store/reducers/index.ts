import * as fromMessage  from './message.reducers'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export{}
export const reducers: ActionReducerMap<any> = {
    profileState: fromMessage.reducer
}