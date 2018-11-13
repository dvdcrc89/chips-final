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

ngOnInit(){

}

}