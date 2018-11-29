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
  today:Date = new Date();
  @Output()
  apply: EventEmitter<Filter> = new EventEmitter();
  @ViewChild('filterForm') filterForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.filterForm.valueChanges.subscribe(
      filter=>this.apply.emit(filter)
    )
  }
 applyFilter(e){
   console.log(e);
 }
}
