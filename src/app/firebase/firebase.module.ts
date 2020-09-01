import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.auth.service';
import { DatabaseService } from './database.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule
  ],
  declarations: [],
  exports: [AngularFireModule, AngularFireAuthModule],
  providers: [FirebaseService, DatabaseService]
  
})
export class FirebaseModule { }
