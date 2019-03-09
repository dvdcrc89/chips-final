import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../container/jobs/store';
import { Observable } from 'rxjs';
import {JobService} from '../container/jobs/services/job.service'
@Pipe({
  name: 'jobPipe',
  pure: false
})
export class JobPipePipe implements PipeTransform {
  jobs$: Observable<any>
  stop:boolean = false;
  res: string = "loading";
  constructor(
    private store: Store<fromStore.JobsMarketState>,
    private jobService: JobService

    
  ){
  
  }
  transform(job_id: string): any {
    if(this.res==="loading"){
    this.jobService.getJobs().subscribe(jobs=>{
      let job = jobs.filter(job=>job.Job_id===job_id);
      this.res = job[0].Position+" at "+job[0].Business

    })
  }
    return this.res;
  }
}


