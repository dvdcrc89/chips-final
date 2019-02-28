import { Profile } from "src/app/models/profile.interface";
import * as fromProfile from '../action/profile.action'

export interface ProfileState {
    allUsers:Profile[],
    myself:Profile,    
    loaded: boolean,
    loading: boolean
}

export const initialState: ProfileState = {
    allUsers: [],
    myself:{
        firstName: "John",
        lastName:"Smith",
        intrests: "KP,Waiter",
        bio: "ciao",
        message: "ciao"

    },
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromProfile.ProfileAction
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
            case fromProfile.LOAD_ALL_USERS:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case fromProfile.LOAD_ALL_USERS_SUCCESS:
            {
                let allUsers = action.payload;
                   
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    allUsers
                }
            }
        case fromProfile.LOAD_ALL_USERS_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
       
    }

    return state;
}

export const getProfileLoading = (state: ProfileState) => state.loading;
export const getProfileLoaded = (state: ProfileState) => state.loaded;
export const getProfileAllUsers = (state: ProfileState) => state.allUsers;
export const getMySelf = (state: ProfileState) => state.myself;

