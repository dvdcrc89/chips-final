import * as fromJobs  from './jobs.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface JobsMarketState{
 jobsState: fromJobs.JobState
}

export const reducers: ActionReducerMap<JobsMarketState> = {
    jobsState: fromJobs.reducer
}


export const getJobsState = createFeatureSelector<JobsMarketState>('jobs');

export const getJobState = createSelector(getJobsState,(state:JobsMarketState)=> state.jobsState);

