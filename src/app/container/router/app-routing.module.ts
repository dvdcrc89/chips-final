import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from '../jobs/jobslist/jobslist.component';
import { ValidationComponent } from '../user/validation/validation.component'
import { SigninComponent } from '../user/signin/signin.component';
import { SignupComponent } from '../user/signup/signup.component';
import { AuthGuard } from '../user/auth-guard.service';
import { AddJobComponent } from '../jobs/components/add-job/add-job.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'validate', component: ValidationComponent },
  { path: 'jobs',canActivate: [AuthGuard], component: JobsListComponent },
  { path: 'jobs/:id', component: JobsListComponent },

  { path: 'addjob',canActivate: [AuthGuard], component: AddJobComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
