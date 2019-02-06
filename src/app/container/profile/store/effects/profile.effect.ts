import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import * as profileAction from '../action/profile.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromService from '../../services/profile.service'
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects{
    constructor(
        private actions$: Actions,
        private profileService: fromService.ProfileService
        ) {}
    
    @Effect()
    loadMyself$ = this.actions$.ofType(profileAction.LOAD_MYSELF)
     .pipe(
         switchMap(()=>{
            return this.profileService.getMyself().pipe(
                map(profile => new profileAction.LoadMyselfSuccess(profile)),
                catchError(error => of(new profileAction.LoadMyselfFail(error)))          
         )}
     ))

     @Effect()
    editInfo$ = this.actions$.ofType(profileAction.EDIT_INFO)
     .pipe(
         switchMap((action: profileAction.EditInfo)=>{
            return this.profileService.editUser(action.payload).pipe(
                map(res => new profileAction.LoadMyself()),
                catchError(error => of(new profileAction.EditInfoFail(error)))          
         )}
     ))
     @Effect()
     uploadFile$ = this.actions$.ofType(profileAction.UPLOAD_FILE)
     .pipe(
         switchMap((action: profileAction.UploadFile)=>{
            return this.profileService.uploadImg(action.file,action.fileType).pipe(
                map(res => new profileAction.LoadMyself()),
                catchError(error => of(new profileAction.UploadFileFail(error)))          
         )}
     ))
}
