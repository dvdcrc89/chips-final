import { Job } from "../../../../models/job.interface";
import * as fromJobs from '../action/jobs.action'

export interface JobState{
    data: Job[],
    loaded: boolean,
    loading: boolean
}

export const initialState: JobState ={
    data:[],
    loaded: false,
    loading:false
};

export function reducer(
    state = initialState,
    action: fromJobs.JobsAction
): JobState {

    switch(action.type){
        case fromJobs.LOAD_JOBS: {
            return {
                ...state,
                loading:true
            }
        }
        case fromJobs.LOAD_JOBS_SUCCESS: {
            console.log("LOAD_JOBS_SUCCESS",action.payload);
            const data = action.payload;
            return {
                ...state,
                loading:false,
                loaded:true,
                data
            }
        }
        case fromJobs.LOAD_JOBS_FAIL: {
            return {
                ...state,
                loading:false,
                loaded: false
            }
        }
    }

    return state;
}

export const getJobsLoading = (state:JobState)=> state.loading;
export const getJobsLoaded = (state:JobState)=> state.loaded;
export const getJobs = (state:JobState)=> state.data;