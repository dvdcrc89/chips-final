import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from '../app/container/user/signup/signup.component';
import { SigninComponent } from '../app/container/user/signin/signin.component';
import { ValidationComponent} from '../app/container/user/validation/validation.component'
import { AppRoutingModule } from '../app/container/router/app-routing.module';
import { AuthService } from '../app/container/user/auth.service';
import { AppComponent } from './app.component';
import { JobsModule} from './container/jobs/jobs.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import {JobService} from './container/jobs/services/job.service'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ValidationComponent
    ],
  imports: [
    BrowserModule,
    JobsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    
  ],
  providers: [AuthService,JobService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
