import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  category:string[] = ["FOH","BOH","OTR"];
  type:string = 'CS';
  today:Date = new Date();
  date: Date=this.today;
  constructor() { }

  ngOnInit() {

  }

}
