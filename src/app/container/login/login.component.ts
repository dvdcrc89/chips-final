import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/firebase/firebase.auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private Auth$: Promise<firebase.Unsubscribe>;
  constructor(private firebase: FirebaseService, private router: Router) { }
  
  ngOnDestroy(): void {
    this.Auth$.then(sub => sub());
  }

  ngOnInit() {
    this.Auth$ = this.firebase.init((auth) => {
      console.log("Login ",auth);
      this.router.navigate(['/jobs'])
    })
  }

  login(){
    return this.firebase.GoogleAuth();
  }

  logout() {
    return this.firebase.AuthLogout();
  }

}
