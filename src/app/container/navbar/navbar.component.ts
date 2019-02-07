import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavBarComponent implements OnInit {
  @Input()
  username:string;
  @Input()
  profilePic:string;
  isMenuOpen:boolean=false;
  isLoading:boolean;
  isFirstTime:boolean= true;
 
  
    ngOnInit() {
      this.isMenuOpen = false;
      this.isLoading = true;
    }
    openMenu(){
      console.log("s'schiacc")
      this.isMenuOpen = !this.isMenuOpen;
      this.isLoading = false;
      this.isFirstTime= false;

    }
}