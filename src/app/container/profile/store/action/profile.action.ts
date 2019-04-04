import {Action} from '@ngrx/store'
import { Profile } from '../../../../models/profile.interface';

//load jobs
export const LOAD_ALL_USERS = '[Profile[]] Load All Users';
export const LOAD_ALL_USERS_FAIL = '[Profile] Load All Users Fail';
export const LOAD_ALL_USERS_SUCCESS = '[Profile] Load All Users Success';
export const LOAD_MYSELF = '[Profile] Load Myself';
export const LOAD_MYSELF_FAIL = '[Profile] Load Myself Fail';
export const LOAD_MYSELF_SUCCESS = '[Profile] Load Myself Success';
export const EDIT_INFO = '[Profile] Edit Info';
export const EDIT_INFO_FAIL = '[Profile] Edit Info Fail';
export const EDIT_INFO_SUCCESS = '[Profile] Edit Info Success';
export const UPLOAD_FILE = '[File] Upload File';
export const UPLOAD_FILE_FAIL = '[File] Upload File Fail';
export const UPLOAD_FILE_SUCCESS = '[File] Upload File Success';



export class LoadMyself implements Action {
    readonly type = LOAD_MYSELF;
}

export class LoadMyselfFail implements Action {
    readonly type = LOAD_MYSELF_FAIL;
    constructor(public payload: any){}
}

export class LoadMyselfSuccess implements Action {
    readonly type = LOAD_MYSELF_SUCCESS;
    constructor(public payload: Profile){}

}

export class EditInfo implements Action {
    readonly type = EDIT_INFO;
    constructor(public payload: Profile){}

}
export class EditInfoFail implements Action {
    readonly type = EDIT_INFO_FAIL;
    constructor(public payload: any){}
}

export class EditInfoSuccess implements Action {
    readonly type = EDIT_INFO_SUCCESS;
}

export class UploadFile implements Action {
    readonly type = UPLOAD_FILE;
    constructor(public file:string,public fileType:string){}

}
export class UploadFileFail implements Action {
    readonly type = UPLOAD_FILE_FAIL;
    constructor(public payload: any){}
}

export class UploadFileSuccess implements Action {
    readonly type = UPLOAD_FILE_SUCCESS;
}
export class LoadAllUsers implements Action {
    readonly type = LOAD_ALL_USERS;
}
export class LoadAllUsersSuccess implements Action {
    readonly type = LOAD_ALL_USERS_SUCCESS;
    constructor(public payload: Profile[]){}

}
export class LoadAllUsersFail implements Action {
    readonly type = LOAD_ALL_USERS_FAIL;
    constructor(public payload: any){}

}


//action types

export type ProfileAction = 
 LoadMyself 
| LoadMyselfFail 
| LoadMyselfSuccess 
| EditInfo 
| EditInfoFail 
| EditInfoSuccess
| UploadFile 
| UploadFileFail 
| UploadFileSuccess
| LoadAllUsers
| LoadAllUsersFail 
| LoadAllUsersSuccess 
