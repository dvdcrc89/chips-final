import {Filter} from './filter.interface';

export interface User{
    id:		        string,
    FirstName: 	    string,
    LastName: 	    string,
    DOB:		    string,
    email:		    string,
    bio?:		    string,
    Picture?:	    string,
    Address?:	    string,
    mobile?:	    number,
    CV?:		    string,
    FlashMessage?:	string,
    PrefFilter?:	Filter,
    Setting?:	    string,
    JobApplIds?:    string[],
    JobPubblished?:    string[]
}