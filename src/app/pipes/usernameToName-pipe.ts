import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../container/jobs/store';
import { Observable } from 'rxjs';
import {ProfileService} from '../container/profile/services/profile.service'
@Pipe({
  name: 'usernameToName',
  pure: false
})
export class UsernameToNamePipe implements PipeTransform {
  private res: string = "loading";
  constructor(
    private store: Store<fromStore.JobsMarketState>,
    private profileService: ProfileService

    
  ){
  
  }
  transform(username: string): any {
    
    if(this.res==="loading"  ){
    this.profileService.getUser(username).subscribe(user=>{
      this.res = user.firstName + " "+ user.lastName
    })
  }
    return this.res;
  }
}


