import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as jobsAction from '../action/jobs.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as fromService from '../../services/job.service'
import { of } from 'rxjs';


@Injectable()
export class JobsEffects{
    constructor(
        private actions$: Actions,
        private jobService: fromService.JobService
        ) {}
    
    @Effect()
    loadJobs$ = this.actions$
     .pipe(
        ofType(jobsAction.LOAD_JOBS),
         switchMap(()=>{
            return this.jobService.getJobs().pipe(
                map(jobs => new jobsAction.LoadJobsSuccess(jobs)),
                catchError(error => of(new jobsAction.LoadJobsFail(error)))          
         )}
     ))

     @Effect()
    addJob$ = this.actions$
     .pipe(
        ofType(jobsAction.ADD_JOB),
         switchMap((action: jobsAction.AddJob)=>{
             console.log("efect",action.payload)
            return this.jobService.addJob(action.payload).pipe(
                map(res => new jobsAction.AddJobSuccess()),
                catchError(error => of(new jobsAction.AddJobFail(error)))          
         )}
     ))
}