import {Action} from '@ngrx/store'
import { Job } from '../../../../models/job.interface';

//load jobs

export const LOAD_JOBS = '[Jobs] Load Jobs';
export const LOAD_JOBS_FAIL = '[Jobs] Load Jobs Fail';
export const LOAD_JOBS_SUCCESS = '[Jobs] Load Jobs Success';

export class LoadJobs implements Action {
    readonly type = LOAD_JOBS;
}

export class LoadJobsFail implements Action {
    readonly type = LOAD_JOBS_FAIL;
    constructor(public payload: any){}
}

export class LoadJobsSuccess implements Action {
    readonly type = LOAD_JOBS_SUCCESS;
    constructor(public payload: Job[]){}

}

//action types

export type JobsAction = LoadJobs | LoadJobsFail | LoadJobsSuccess;