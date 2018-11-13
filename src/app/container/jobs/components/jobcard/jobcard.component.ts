import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Job} from '../../../../../app/models/job.interface';
@Component({
  selector: 'job_card',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {
 
  @Input()
  job: Job;
  
  @Input()
  jobsApplied: string[];

  @Output()
  apply: EventEmitter<Job> = new EventEmitter();

  @Output()
  share: EventEmitter<Job> = new EventEmitter();

  @Output()
  details: EventEmitter<Job> = new EventEmitter();



  constructor() { }

  ngOnInit() {}

  onApply(){
    this.apply.emit(this.job);
  }

  onShare(){
    this.share.emit(this.job);
  }

  onDetails(){
    this.details.emit(this.job);
  }

}
