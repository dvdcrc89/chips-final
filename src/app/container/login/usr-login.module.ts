import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component'
import { FirebaseModule } from 'src/app/firebase/firebase.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  
})
export class UsrLoginModule { }
