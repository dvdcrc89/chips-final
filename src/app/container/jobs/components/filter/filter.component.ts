import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Filter } from '../../../../models/filter.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()
  filter:Filter
  today:Date = null;
  @Output()
  apply: EventEmitter<Filter> = new EventEmitter();
  @ViewChild('filterForm') filterForm: NgForm;

  type:string;
  constructor() { }

  ngOnInit() {
  }
 applyFilter(e){
    let filter =this.filterForm.value;
    if (this.filterForm.value.type!=='CS'){
      filter.date=null;
    }
   this.apply.emit(filter);
 }
}
