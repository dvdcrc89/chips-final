import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Job} from '../../../../models/job.interface'


@Component({
    selector: 'jobs_map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
  })
export class MapComponent implements OnInit {
    @Input()
    activejobs:Job[];
    @Input()
    opacity: number[];
    @Output()
    markerClick;
    @Output()
    highlight:EventEmitter<string> = new EventEmitter()
   
    select(id){
        this.highlight.emit(id);
    }
    log(e){
        console.log(e);
    }
    
    ngOnInit(){
        console.log("activeonmap",this.activejobs)
    }

}

