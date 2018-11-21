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

export const getJobsEntities = createSelector(getJobState,fromJobs.getJobsEntities);
export const getAllJobs = createSelector(
    getJobsEntities,
    (entities)=>{
        return Object.keys(entities).map(id=>entities[id])
    }
    );

export const getJobsLoaded = createSelector(getJobState,fromJobs.getJobsLoaded);
export const getJobsLoading = createSelector(getJobState,fromJobs.getJobsLoading);