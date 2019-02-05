import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromProfile from '../reducers/profile.reducers'



export const getAllUser = createSelector(fromFeature.getProfileState,fromProfile.getProfileAllUsers);
export const getMySelf = createSelector(fromFeature.getProfileState,fromProfile.getMySelf);

export const getMyName = createSelector(getMySelf,(myself):string=>{
    return myself.firstName;
});
export const getMyLastName = createSelector(getMySelf,(myself):string=>{
    return myself.lastName;
});
export const getMyBio = createSelector(getMySelf,(myself):string=>{
    return myself.bio;
});
export const getMyIntrests = createSelector(getMySelf,(myself):string=>{
    return myself.intrests;
});
export const getMyMessage = createSelector(getMySelf,(myself):string=>{
    return myself.message;
});