import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-message',
  templateUrl: './smart-message.component.html',
  styleUrls: ['./smart-message.component.css']
})
export class SmartMessageComponent implements OnInit {

 conversations=[{ 
   profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
 },{ 
  profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
  profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
},{ 
  profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
},{ 
  profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
},{ 
  profile : { firstName: "Gina",lastName: "La Polla", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Sandra",lastName: "Smith", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Waitress", business: "Pump House"}, message:"Hi You, how are you.."
},{ 
 profile : { firstName: "Pina",lastName: "La Pina", profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"},
job:{ position: "Chef", business: "SandremX"}, message:"Hi You, how are you.."
}]
  constructor() { }

  ngOnInit() {
  }

}
