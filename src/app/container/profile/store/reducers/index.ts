import * as fromProfile  from './profile.reducers'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface ProfileSectionState{
 profileState: fromProfile.ProfileState
}

export const reducers: ActionReducerMap<ProfileSectionState> = {
    profileState: fromProfile.reducer
}


export const getMyselfState = createFeatureSelector<ProfileSectionState>('profiles');

export const getProfileState = createSelector(getMyselfState,(state:ProfileSectionState)=> state.profileState);