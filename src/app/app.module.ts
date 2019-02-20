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
import { ProfileModule} from './container/profile/profile.module'
import { MessagesModule} from './container/messages/messages.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule,MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {JobService} from './container/jobs/services/job.service'
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './container/navbar/navbar.component';
import {reducers, CustomSerializer} from './store'
import {StoreRouterConnectingModule, RouterStateSerializer} from '@ngrx/router-store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { NotFoundComponent } from './container/not-found/not-found.component';

const environment = {
  development: true,
  production: false,
};
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ValidationComponent,
    NavBarComponent,
    NotFoundComponent,
    
    
    ],
  imports: [
    BrowserModule,
    JobsModule,
    ProfileModule,
    MessagesModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    
  ],
  providers: [AuthService,JobService,HttpClientModule,
    {provide: RouterStateSerializer,useClass:CustomSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
