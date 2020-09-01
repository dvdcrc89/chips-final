import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profileSmart/profileSmart.component';
import { ProfileUIComponent } from './components/profileUI/profileUI.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import  {MatDatepickerModule} from '@angular/material/datepicker';
import  {MatNativeDateModule} from '@angular/material/core';
import  {MatChipsModule} from '@angular/material/chips';
import  {MatSlideToggleModule} from '@angular/material/slide-toggle';
import  {MatRadioModule} from '@angular/material/radio';
import  {MatSelectModule} from '@angular/material/select';
import  {MatButtonToggleModule} from '@angular/material/button-toggle';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects';
import {reducers,effects} from './store'
import { EditInfoComponent } from './components/editInfo/editInfo.component';
import { EditMessageComponent } from './components/editMessage/editMessage.component';
import { EditImagesComponent } from './components/imgUpload/imgUpload.component';
import { ProfileService } from './services/profile.service';
import { EditCVComponent } from './components/editCV/editCV.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserProfileComponent } from './userProfile/userProfile.component';
import { UserProfileUIComponent } from './components/userProfileUI/UserProfileUI.component';
import { ProfileFirebaseService } from './services/firebase/profile.firebase.service';


@NgModule({
    declarations: [
    ProfileComponent,
    ProfileUIComponent,
    EditInfoComponent,
    EditMessageComponent,
    EditImagesComponent,
    EditCVComponent,
    UserProfileComponent,
    UserProfileUIComponent
      
    
    ],
    imports:[
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
        MatChipsModule,
        CommonModule,
        FormsModule,
        PdfViewerModule,
        StoreModule.forFeature('profiles',reducers),
        EffectsModule.forFeature(effects)


    ],
    exports:[
        ProfileComponent,
    ],
    providers:[ProfileService, ProfileFirebaseService]

})
    export class ProfileModule {}


