import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as profileAction from '../action/profile.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromService from '../../services/profile.service'
import { of } from 'rxjs';
import { ProfileFirebaseService } from '../../services/firebase/profile.firebase.service';

@Injectable()
export class ProfileEffects{
    constructor(
        private actions$: Actions,
        private profileService: fromService.ProfileService,
        private firebaseProfile: ProfileFirebaseService
        ) {}
    
    @Effect()
    loadMyself$ = this.actions$
     .pipe(
         ofType(profileAction.LOAD_MYSELF),
         switchMap(()=>{
            return this.firebaseProfile.getMyself().pipe(
                map(profile => new profileAction.LoadMyselfSuccess(profile)),
                catchError(error => of(new profileAction.LoadMyselfFail(error)))          
         )}
     ))

     @Effect()
    editInfo$ = this.actions$
     .pipe(
         ofType(profileAction.EDIT_INFO),
         switchMap((action: profileAction.EditInfo)=>{
            return this.profileService.editUser(action.payload).pipe(
                map(res => new profileAction.LoadMyself()),
                catchError(error => of(new profileAction.EditInfoFail(error)))          
         )}
     ))
     @Effect()
     uploadFile$ = this.actions$
     .pipe(
         ofType(profileAction.UPLOAD_FILE),
         switchMap((action: profileAction.UploadFile)=>{
            return this.profileService.uploadImg(action.file,action.fileType).pipe(
                map(res => new profileAction.LoadMyself()),
                catchError(error => of(new profileAction.UploadFileFail(error)))          
         )}
     ))
     @Effect()
     loadAllUsers$ = this.actions$
      .pipe(
          ofType(profileAction.LOAD_ALL_USERS ),
          switchMap(()=>{
             return this.profileService.getAllUsers().pipe(
                 map(allusers => new profileAction.LoadAllUsersSuccess(allusers)),
                 catchError(error => of(new profileAction.LoadAllUsersFail(error)))          
          )}
      ))
      
}
