import {Action} from '@ngrx/store'
import { Job } from '../../../../models/job.interface';

//load jobs

export const LOAD_JOBS = '[Jobs] Load Jobs';
export const LOAD_JOBS_FAIL = '[Jobs] Load Jobs Fail';
export const LOAD_JOBS_SUCCESS = '[Jobs] Load Jobs Success';
export const ADD_JOB = '[Job] Add Job';
export const ADD_JOB_FAIL = '[Job] Add Job Fail';
export const ADD_JOB_SUCCESS = '[Job] Add Job Success';



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

export class AddJob implements Action {
    readonly type = ADD_JOB;
    constructor(public payload: Job){}

}
export class AddJobFail implements Action {
    readonly type = ADD_JOB_FAIL;
    constructor(public payload: any){}
}

export class AddJobSuccess implements Action {
    readonly type = ADD_JOB_SUCCESS;
}
//action types

export type JobsAction = LoadJobs | LoadJobsFail | LoadJobsSuccess | AddJob | AddJobFail | AddJobSuccess;