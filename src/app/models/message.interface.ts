
import {User} from './user.interface';

export interface Message {
	User: 		User,
	Message: 	string,
	timestamp: 	any,
	read:		boolean,
	deleted:	boolean
}