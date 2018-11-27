import { Component, OnInit, Input } from '@angular/core';
import {Job} from '../../../../app/models/job.interface';
import {user} from './../../tempo/user'
import {jobsarray} from './../../tempo/jobs'
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Component({
  selector: 'jobs_list',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css'],
  
})
export class JobsListComponent implements OnInit {
  activejobs:any[];
  jobs: Job[];
  jobs$: Observable<Job[]>;
  jobsPages$:Observable<Job[]>;
  isLoading$: Observable<boolean>;
  activeJobs$: Observable<Job[]>;
  jobsDivided: Job[][];
  page: number = 0;
  totalPage:number;
  isTemp: boolean = true;
  showMap:boolean =false;
  opacity: number[];
  hero:any;
  loading:boolean=true;
  details: Job = null;
  
  constructor(
    private store: Store<fromStore.JobsMarketState>
    ) { }
  
  ngOnInit() {
   
    this.hero = user;
    
  //  this.authService.getAuthenticatedUser().getSession((err,session)=>{
  //     if(err){
  //       console.log(err)
  //     } else if(session){
  //         console.log(session.getIdToken().getJwtToken())
  //     }});
  
    console.log(jobsarray);
    //store
    this.jobs$ = this.store.select(fromStore.getAllJobs);
    this.jobsPages$ = this.store.select(fromStore.getJobsPages);
    this.activeJobs$ = this.store.select(fromStore.getJobsPage);
    this.isLoading$ = this.store.select(fromStore.getJobsLoading);
    this.store.dispatch(new fromStore.LoadJobs);  
    console.log(this.activeJobs$);
    console.log("this jobs",this.jobsPages$);
    


  }
  
  nextPage(){
    if(this.page <this.jobsDivided.length-1){
    this.page+=1
    this.activejobs= this.jobsDivided[this.page];
    
    scroll(0,0);
    }
  }
  
  prevPage(){
    if(this.page>0){
      this.page-=1;
      this.activejobs= this.jobsDivided[this.page];
      
    }
    else  this.activejobs= this.jobsDivided[0];
    
    scroll(0,0);
  }

 toggleMap(){
   this.showMap=!this.showMap;
   if(this.showMap) this.details = null;
 }

  selected(id){
    this.opacity = this.opacity.map((opa,index)=>{
      if(index!=id) return 0.3;
    })


  }
  deselected(id){
    this.opacity=this.activejobs.map((job)=> 1);
}

  handleApply(job){
  
  }
  handleShare(job){
    console.log("Share",job);
  }
  showDetails(job){
    this.details = job;
    this.showMap = false;
  }
  handleClose(){
    this.details = null;
  }
 
}