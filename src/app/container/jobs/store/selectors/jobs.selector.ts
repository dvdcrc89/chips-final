import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromJobs from '../reducers/jobs.reducer'
import { Job } from "../../../../models/job.interface";


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
export const getJobsPage = createSelector(getJobsPages,
    fromRoot.getRouterState,
    (jobsPages,router):Job[]=>{
        let page = router.state.params.page > 1 && router.state.params.page <=jobsPages.totalPages
            ? router.state.params.page:1;
        return router.state && jobsPages[page]
    });


    export const getActivePage = createSelector(getJobsPages,
        fromRoot.getRouterState,
        (jobsPages,router):number=>{
            return router.state.params.page > 1 && router.state.params.page <=jobsPages.totalPages
                ? router.state.params.page:1;
        });
