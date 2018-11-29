import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  category:string;
  type:string;
  date: Date;
  today:Date = new Date();
  constructor() { }

  ngOnInit() {
  
  this.type="PJ";
  this.category="FOH";
  }

}
