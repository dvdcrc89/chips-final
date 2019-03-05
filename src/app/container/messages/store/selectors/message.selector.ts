import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers';
import * as fromMessage from '../reducers/message.reducers'
import { environment } from "src/environments/environment";

export const getList = createSelector(fromFeature.getMessageState,fromMessage.getConversationsList);
