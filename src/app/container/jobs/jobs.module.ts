import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsListComponent} from './jobslist/jobslist.component'
import { JobcardComponent } from './components/jobcard/jobcard.component';
import { MapComponent} from './components/map/map.component'
import { AgmCoreModule } from '@agm/core';
import { AddJobComponent } from './components/add-job/add-job.component'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import  {MatDatepickerModule} from '@angular/material/datepicker';
import  {MatNativeDateModule} from '@angular/material/core';
import  {MatBadgeModule} from '@angular/material/badge';
import  {MAT_DATE_LOCALE} from '@angular/material/core';
import  {MatSlideToggleModule} from '@angular/material/slide-toggle';
import  {MatRadioModule} from '@angular/material/radio';
import  {MatSelectModule} from '@angular/material/select';
import  {MatButtonToggleModule} from '@angular/material/button-toggle';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects';
import {reducers,effects} from './store'
import { environment } from '../../../environments/environment';
import { JobComponent } from './components/job/job.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    JobcardComponent,
    JobsListComponent,
    MapComponent,
    AddJobComponent,
    JobComponent,
    FilterComponent,
    PaginationComponent
    
  
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
    GooglePlaceModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    StoreModule.forFeature('jobs',reducers),
    EffectsModule.forFeature(effects)

    
  ],
  exports: [
    JobcardComponent,
    JobsListComponent,
    MapComponent,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],

})
export class JobsModule {}
