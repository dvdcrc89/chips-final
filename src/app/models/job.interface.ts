
import {User} from './user.interface';
export interface Job {
    id:		    string,										
	business: 	string,
	description:string,
	position:	string,			
	pay:		number,		
	isTemporanery?:	boolean,
	lat?:		number,
	lng?:		number,
	date?:		Date,
	expiring?:	Date,
	Created_at?:number,
	applicants?:	[string],
}


	
	// applicants:	{User, Message[]}[] | []