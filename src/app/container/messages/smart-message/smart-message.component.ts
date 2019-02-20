import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-message',
  templateUrl: './smart-message.component.html',
  styleUrls: ['./smart-message.component.css']
})
export class SmartMessageComponent implements OnInit {

  profile = {
    firstName: "Gina",
    lastName: "La Polla",
    profilePic :"https://s3.eu-west-2.amazonaws.com/chips-files-storage/pino_PP"
  }
job={
  position: "Chef",
  business: "Pump House"
}
message="Hi Bitch, how are you.."
  constructor() { }

  ngOnInit() {
  }

}
