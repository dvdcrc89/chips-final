import * as fromProfile  from './profile.reducers'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface ProfileSectionState{
 profileState: fromProfile.ProfileState
}

export const reducers: ActionReducerMap<ProfileSectionState> = {
    profileState: fromProfile.reducer
}


export const getMyselfState = createFeatureSelector<ProfileSectionState>('myself');

export const getProfileState = createSelector((state:ProfileSectionState)=> state.profileState);