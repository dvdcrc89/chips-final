import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
  totalPages:number;
  @Input()
  activePage:number;
  @Input()
  howManyJobs:number;
  @Output()
  changePage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.howManyJobs);
  }
  prevPage(){
    this.changePage.emit(1*this.activePage-1)
  }
  nextPage(){
    this.changePage.emit(1*this.activePage+1)
  }
}
