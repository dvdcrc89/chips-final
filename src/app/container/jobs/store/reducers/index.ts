import * as fromJobs  from './jobs.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'

export interface JobsMarketState{
 jobs: fromJobs.JobState
}

export const reducers: ActionReducerMap<JobsMarketState> = {
    jobs: fromJobs.reducer
}


export const getJobsState = createFeatureSelector<JobsMarketState>('jobs');

export const getJobState = createSelector(getJobsState,(state:JobsMarketState)=> state.jobs);

export const getAllJobs = createSelector(getJobState,fromJobs.getJobs);
export const getJobsLoaded = createSelector(getJobState,fromJobs.getJobsLoaded);
export const getJobsLoading = createSelector(getJobState,fromJobs.getJobsLoading);