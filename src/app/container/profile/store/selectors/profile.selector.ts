import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromProfile from '../reducers/profile.reducers'
import { environment } from "src/environments/environment";
import { Profile } from "src/app/models/profile.interface";



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

export const getUserProfile = createSelector(getAllUser,
    fromRoot.getRouterState,
    (users,router):any=>{
        console.log("QUIIIIIIIIIIIIIIIIIIIII");
        let usersFilter = users.filter(user=>user.username===router.state.params.username);
        let user;
        console.log(users,usersFilter);
        if(usersFilter.length>0){
            user = usersFilter[0];
            let profilePic = environment.s3_imgs+user.username+"_PP"+"?"+Math.random();
            let coverPic = environment.s3_imgs+user.username+"_CP"+"?"+Math.random()
            let cv = environment.s3_imgs+user.username+"_CV"+"?"+Math.random()
            let intrests = user.intrests? user.intrests.split(","):"";
            let bioArray = user.bio? user.bio.split("<br>") :[""]
            user = {
                ...user,
                profilePic,
                coverPic,
                cv,
                intrests,
                bioArray
            }
        } 
        return usersFilter ? user : false;
    
    });
export const getProfileLoaded = createSelector(fromFeature.getProfileState,fromProfile.getProfileLoaded);
export const getProfileLoading = createSelector(fromFeature.getProfileState,fromProfile.getProfileLoading);