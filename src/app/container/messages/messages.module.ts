import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
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
import { SmartMessageComponent } from './smart-message/smart-message.component';
import { ConversationLabelComponent } from './components/conversation-label/conversation-label.component';
import { ConversationContainerComponent } from './components/conversation-container/conversation-container.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageTextAreaComponent } from './components/message-textarea/message-textarea.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';
import { JobPipePipe } from 'src/app/pipes/job-pipe.pipe';
import { UsernameToNamePipe } from 'src/app/pipes/usernameToName-pipe';

@NgModule({
  declarations: [
   SmartMessageComponent,
   ConversationLabelComponent,
   ConversationContainerComponent,
   ChatContainerComponent,
   ChatHeaderComponent,
   ChatComponent,
   MessageTextAreaComponent,
   MessageComponent,
   JobPipePipe,
   UsernameToNamePipe
    
  
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
    MatBadgeModule,
    StoreModule.forFeature('messages',reducers),
    EffectsModule.forFeature(effects)

    
  ],
  exports: [
    SmartMessageComponent,
    ConversationLabelComponent,
    ConversationContainerComponent,
    ChatContainerComponent,
    ChatHeaderComponent,
    ChatComponent,
    MessageTextAreaComponent,
    MessageComponent,
    JobPipePipe,
    UsernameToNamePipe

    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},MessageService],

})
export class MessagesModule {}
