import { Job } from "../../../../models/job.interface";
import * as fromJobs from '../action/jobs.action'

export interface JobState {
    entities: {
            [id: string]: Job
        },
    jobsPages:any,        
    loaded: boolean,
    loading: boolean
}

export const initialState: JobState = {
    entities: {},
    jobsPages:{},        
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromJobs.JobsAction
): JobState {

    switch (action.type) {
        case fromJobs.LOAD_JOBS:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case fromJobs.LOAD_JOBS_SUCCESS:
            {
                let jobs = action.payload;
                const jobsPages = createPagination(jobs, 12)
                console.log("jobs Divided", jobsPages);
                const entities = jobs.reduce(
                    (entities: {
                        [id: string]: Job
                    }, job) => {
                        return {
                            ...entities,
                            [job.Job_id]: job,
                        }
                    }, {
                        ...state.entities,
                    });
                console.log(entities);
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    entities,
                    jobsPages
                }
            }
        case fromJobs.LOAD_JOBS_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
    }

    return state;
}

export const getJobsLoading = (state: JobState) => state.loading;
export const getJobsLoaded = (state: JobState) => state.loaded;
export const getJobsEntities = (state: JobState) => state.entities;
export const getJobsPages = (state: JobState) => state.jobsPages;




const createPagination = (jobs: Job[], itemPerPage) => {
    const jobsPerPage = itemPerPage;
    let jobsDivided = jobs.reduce((r, v) =>
        (!r.length || r[r.length - 1].length === itemPerPage ?
            r.push([v]) : r[r.length - 1].push(v)) && r, []);
    let jobsPages = jobsDivided.reduce(
        (jobsPages: {
            [id: number]: Job[]
        }, jobPage, index) => {
            return {
                ...jobsPages,
                [index + 1]: jobPage,
            }
        }, {
        })

    return {
        ...jobsPages,
        "totalPages": Object.keys(jobsPages).length
    }    
}