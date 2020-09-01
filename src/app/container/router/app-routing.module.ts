import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from '../jobs/jobslist/jobslist.component';
import { ValidationComponent } from '../user/validation/validation.component'
import { SigninComponent } from '../user/signin/signin.component';
import { SignupComponent } from '../user/signup/signup.component';
import { AddJobComponent } from '../jobs/components/add-job/add-job.component';
import { ProfileComponent } from '../profile/profileSmart/profileSmart.component';
import { UserProfileComponent } from '../profile/userProfile/userProfile.component';
import { NotFoundComponent } from '../not-found/not-found.component'
import { SmartMessageComponent } from '../messages/smart-message/smart-message.component';
import { LoginComponent } from 'src/app/container/login/login.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorized = () => redirectUnauthorizedTo(['login']);
const redirectLoggedIn = () => redirectLoggedInTo(['jobs']);

const loggedIn =  { data: { authGuardPipe: redirectUnauthorized }}
const guest =     { data: { authGuardPipe: redirectLoggedIn }}

const routes: Routes = [
  { path: '', component: SigninComponent },
  {path : 'login', canActivate: [AngularFireAuthGuard], component: LoginComponent, ...guest},
  { path: 'signup', component: SignupComponent },
  { path: 'validate', component: ValidationComponent },
  { path: 'jobs',canActivate: [AngularFireAuthGuard], component: JobsListComponent, ...loggedIn },
  { path: 'jobs/:page', component: JobsListComponent },
  { path: 'addjob',canActivate: [AngularFireAuthGuard], component: AddJobComponent, ...loggedIn },
  { path: 'profile',canActivate: [AngularFireAuthGuard], component: ProfileComponent, ...loggedIn },
  { path: 'profile/:username',canActivate: [AngularFireAuthGuard], component: UserProfileComponent, ...loggedIn },
  { path: 'notfound', component:NotFoundComponent, ...loggedIn},
  { path: 'messages',canActivate: [AngularFireAuthGuard], component: SmartMessageComponent, ...loggedIn },
  { path: 'messages/:username',canActivate: [AngularFireAuthGuard], component: SmartMessageComponent, ...loggedIn },
  { path: 'messages/:username/:job_id',canActivate: [AngularFireAuthGuard], component: SmartMessageComponent, ...loggedIn },


  { path: '**', redirectTo: 'notfound' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
