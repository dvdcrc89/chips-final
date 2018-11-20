import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
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
    loadJobs$ = this.actions$.ofType(jobsAction.LOAD_JOBS)
     .pipe(
         switchMap(()=>{
            return this.jobService.getJobs().pipe(
                map(jobs => new jobsAction.LoadJobsSuccess(jobs)),
                catchError(error => of(new jobsAction.LoadJobsFail(error)))          
         )}
     ))
}