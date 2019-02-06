import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromProfile from '../reducers/profile.reducers'
import { environment } from "src/environments/environment";



export const getAllUser = createSelector(fromFeature.getProfileState,fromProfile.getProfileAllUsers);

export const getMySelf = createSelector(fromFeature.getProfileState,fromProfile.getMySelf);
export const getMyUsername = createSelector(getMySelf,(myself):string=>{
    return  myself.username;

});
export const getMyName = createSelector(getMySelf,(myself):string=>{
    return myself.firstName;
});
export const getMyLastName = createSelector(getMySelf,(myself):string=>{
    return myself.lastName;
});
export const getMyBio = createSelector(getMySelf,(myself):string=>{
    return myself.bio;
});
export const getMyBioArray = createSelector(getMySelf,(myself):string[]=>{
    let bioArray = myself.bio ? myself.bio.split("<br>") : [""]
    console.log(bioArray);
    return bioArray;
});
export const getMyIntrests = createSelector(getMySelf,(myself):string[]=>{
    return myself.intrests  ? myself.intrests.split(','): [""];
});
export const getMyMessage = createSelector(getMySelf,(myself):string=>{
    return myself.message;
});

export const getMyPP = createSelector(getMySelf,(myself):string=>{
    let username = myself.username;
    return environment.s3_imgs+username+"_PP"+"?"+Math.random();;
});
export const getMyCP = createSelector(getMySelf,(myself):string=>{
    let username = myself.username;
    return environment.s3_imgs+username+"_CP"+"?"+Math.random();;
});
export const getMyCV = createSelector(getMySelf,(myself):string=>{
    let username = myself.username;
    return environment.s3_imgs+username+"_CV"+"?"+Math.random();;
});

export const getProfileToSee = createSelector(fromFeature.getProfileState,fromProfile.getProfileToSee);

export const getProfileToSeeName = createSelector(getProfileToSee,(profile):string=>{
    return profile.firstName;
});
export const getProfileToSeeLastName = createSelector(getProfileToSee,(profile):string=>{
    return profile.lastName;
});
export const getProfileToSeeBio = createSelector(getProfileToSee,(profile):string=>{
    return profile.bio;
});
export const getProfileToSeeBioArray = createSelector(getProfileToSee,(profile):string[]=>{
    let bioArray= profile.bio ? profile.bio.split("<br>") : [""]
    return bioArray;
});
export const getProfileToSeeIntrests = createSelector(getProfileToSee,(profile):string=>{
    return profile.intrests;
});
export const getProfileToSeeUsername = createSelector(getProfileToSee,(profile):string=>{
    return profile.username;
});

export const getProfileLoaded = createSelector(fromFeature.getProfileState,fromProfile.getProfileLoaded);
export const getProfileLoading = createSelector(fromFeature.getProfileState,fromProfile.getProfileLoading);