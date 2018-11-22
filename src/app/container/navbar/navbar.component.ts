import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavBarComponent implements OnInit {
  @Input()
  username:string;
  isMenuOpen:boolean;
 
 
  
    ngOnInit() {
      this.isMenuOpen = false;
    }
    openMenu(){
      console.log("s'schiacc")
      this.isMenuOpen = !this.isMenuOpen;
    }
}