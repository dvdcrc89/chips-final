import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromJobs from '../reducers/jobs.reducer';


export const getJobsEntities = createSelector(fromFeature.getJobState,fromJobs.getJobsEntities);
export const getAllJobs = createSelector(
    getJobsEntities,
    (entities)=>{
        return Object.keys(entities).map(id=>entities[id])
    }
    );
export const getJobsPages = createSelector(fromFeature.getJobState,fromJobs.getJobsPages);

export const getJobsLoaded = createSelector(fromFeature.getJobState,fromJobs.getJobsLoaded);
export const getJobsLoading = createSelector(fromFeature.getJobState,fromJobs.getJobsLoading);