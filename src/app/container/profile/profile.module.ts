import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profileSmart/profileSmart.component';
import { ProfileUIComponent } from './components/profileUI/profileUI.component';
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
  MatButtonToggleModule,
  MatChipsModule
} from '@angular/material';
import { EditInfoComponent } from './components/editInfo/editInfo.component';
import { FormsModule } from '@angular/forms';
import { EditMessageComponent } from './components/editMessage/editMessage.component';


@NgModule({
    declarations: [
    ProfileComponent,
    ProfileUIComponent,
    EditInfoComponent,
    EditMessageComponent
      
    
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
        FormsModule

    ],
    exports:[
        ProfileComponent,
    ]

})
    export class ProfileModule {}


