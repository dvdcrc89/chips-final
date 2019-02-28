import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import * as messageAction from '../action/message.action';
import { map, switchMap, catchError } from 'rxjs/operators';
// import * as fromService from '../../services/profile.service'
import { of } from 'rxjs';

@Injectable()
export class MessageEffects{
}
