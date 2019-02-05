import { Profile } from "src/app/models/profile.interface";
import * as fromProfile from '../action/profile.action'

export interface ProfileState {
    allUsers:Profile[],
    myself:Profile,    
    profileToSee:Profile,   
    loaded: boolean,
    loading: boolean
}

export const initialState: ProfileState = {
    allUsers: [],
    myself:{},
    profileToSee:{},  
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromProfile.JobsAction
): ProfileState {

    switch (action.type) {
        case fromProfile.LOAD_MYSELF:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case fromProfile.LOAD_MYSELF_SUCCESS:
            {
                let myself = action.payload;
                   
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    myself
                }
            }
        case fromProfile.LOAD_MYSELF_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromProfile.EDIT_INFO:
            {
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
            }
        case fromProfile.EDIT_INFO_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromProfile.EDIT_INFO_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: true
                }
            }
            case fromProfile.UPLOAD_FILE:
            {
                return {
                    ...state,
                    loading: true,
                    loaded: false
                }
            }
        case fromProfile.UPLOAD_FILE_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        case fromProfile.UPLOAD_FILE_SUCCESS:
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

export const getProfileLoading = (state: ProfileState) => state.loading;
export const getProfileLoaded = (state: ProfileState) => state.loaded;
export const getProfileAllUsers = (state: ProfileState) => state.allUsers;
export const getProfileToSee = (state: ProfileState) => state.profileToSee;
