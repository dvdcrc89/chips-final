import { Component, OnInit, Input } from '@angular/core';
import {Job} from '../../../../app/models/job.interface';
import {user} from './../../tempo/user'
import {jobsarray} from './../../tempo/jobs'
import { AuthService } from '../../user/auth.service';
import {JobService} from '../services/job.service'
@Component({
  selector: 'jobs_list',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css'],
  
})
export class JobsListComponent implements OnInit {
  activejobs:Job[];
  jobs: Job[];
  jobsDivided: Job[][];
  page: number = 0;
  totalPage:number;
  isTemp: boolean = true;
  showMap:boolean =false;
  opacity: number[];
  hero:any;
  loading:boolean=true;
  details: Job = null;
  
  constructor(private jobService:JobService,private authService: AuthService) { }

  ngOnInit() {
    this.hero = user;
    
  //  this.authService.getAuthenticatedUser().getSession((err,session)=>{
  //     if(err){
  //       console.log(err)
  //     } else if(session){
  //         console.log(session.getIdToken().getJwtToken())
  //     }});
  
    console.log(jobsarray);
    const doChunk = (list, size) => list.reduce((r, v) =>
    (!r.length || r[r.length - 1].length === size ?
       r.push([v]) : r[r.length - 1].push(v)) && r
      , []);  
  
    this.jobService.getJobs().subscribe(
    jobs =>{
              this.jobs=jobs.sort((a,b)=>b.Created_at-a.Created_at);
              console.log(this.jobs);
              this.jobsDivided = doChunk(this.jobs,12);
              this.activejobs= this.jobsDivided[0];
              console.log(this.activejobs);

              this.totalPage=this.jobsDivided.length;
              this.deselected(null);
              this.loading=false;
    }
    );


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
 }

  selected(id){
    console.log(id);
    this.opacity = this.opacity.map((opa,index)=>{
      if(index!=id) return 0.3;
    })


  }
  deselected(id){
    this.opacity=this.activejobs.map((job)=> 1);
}

  handleApply(job){
      this.jobService.applyJob(job).subscribe(
        res=>console.log(res)
      )
  }
  handleShare(job){
    console.log("Share",job);
  }
  showDetails(job){
    this.details = job
  }
}