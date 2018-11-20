import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavBarComponent implements OnInit {
  @Input()
  username:string;
  
    ngOnInit() {
    
    }
    
}