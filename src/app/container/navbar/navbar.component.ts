import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.interface';

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
  @Input()
  profiles:Profile[];
  isMenuOpen:boolean=false;
  isLoading:boolean;
  isFirstTime:boolean= true;
  search:string;
  queryResult:any[];

  
  constructor(
    private router :Router

  ){
  }
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
    filter(string,array){
      if(this.search.length>1){
        let filtered = array.filter(item => item.firstName.toLowerCase().indexOf(string.toLowerCase()) > -1 || item.lastName.toLowerCase().indexOf(string.toLowerCase()) > -1 );
        this.queryResult= filtered;
    }else{
        this.queryResult=[]
    }
    }

    showProfile(username){
      this.search="";
      this.queryResult=[];
      this.router.navigate(['/profile/'+username])
    }
}