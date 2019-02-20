import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatSlideToggleModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonToggleModule
} from '@angular/material';

import { environment } from '../../../environments/environment';
import { SmartMessageComponent } from './smart-message/smart-message.component';
import { ConversationLabelComponent } from './components/conversation-label/conversation-label.component';

@NgModule({
  declarations: [
   SmartMessageComponent,
   ConversationLabelComponent
    
  
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleAPI
    }),
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

    
  ],
  exports: [
    SmartMessageComponent,
    ConversationLabelComponent,
    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],

})
export class MessagesModule {}
