import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Job} from '../../../../../app/models/job.interface';
@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
@Input()
job:Job;

@Output()
apply: EventEmitter<Job> = new EventEmitter();

@Output()
close: EventEmitter<Job> = new EventEmitter();


ngOnInit(){

}

handleClose(){
  this.close.emit()
}
applyJob(){
  this.apply.emit(this.job)
}
}