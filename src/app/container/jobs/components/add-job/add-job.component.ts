import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {JobService} from '../../services/job.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  imageUrl:string = "../../../../../assets/images/imgplaceholder.png";
  lat:number;
  lng:number;
  placeName:string;
  placeSelected:boolean = false;
  address:string;
  brightonFirst = new google.maps.LatLngBounds(
    new google.maps.LatLng(50.837397,-0.1762297),
    new google.maps.LatLng(50.837397,-0.1762297));
  options={
    bounds: this.brightonFirst,
    types: ['establishment'],
    componentRestrictions: { 
      country: 'UK'
    }
  }
  today = new Date();
  isTemp:boolean =false;
  jobType:string;

    
  

  @ViewChild('usrForm') form: NgForm;

  constructor(private router: Router,private jobService:JobService) { }

  ngOnInit() {

  }
  onSubmit(){
   console.log(this.form.value);
   let job:any = {
      business:this.placeName,
      address: this.address,
      pic: this.imageUrl,
      lat:this.lat,
      lng:this.lng,
      position:this.form.value.position,
      category: this.form.value.jobType,
      isTemp: this.form.value.isTemp,
      descr:this.form.value.description.trim(),
    }
    if(this.form.value.isTemp){
          job = {
              ...job,
              date: this.form.value.date,
              payPerHour: this.form.value.payPerHour,
              shiftStartAt: this.form.value.shiftStartAt,
              shiftEndAt: this.form.value.shiftEndAt
                }
      } else {
          job = {
              ...job,
              hours: this.form.value.hoursPerWeek,
              pay:this.form.value.pay,
                }
          }
          console.log(job);
          this.jobService.addJob(job).subscribe(
            (res)=>this.router.navigate(['/jobs'])
          );
  }
  handleAddressChange(e){ 
    console.log(e);
    if(e.photos){
      this.imageUrl = this.findBestImage(e.photos).getUrl();
    }
    this.lat = e.geometry.location.lat();
    this.lng = e.geometry.location.lng();
    this.placeName=e.name;
    this.address = e.formatted_address;
    this.placeSelected = true;
    
  }
 
  findBestImage(pics:Array<any>)
  {
    // Find the image with the hightst ratio width/height
    let index= pics.map((pic,index)=>
    ({
      value:pic.width/pic.height,
      index: index
    })
    ).sort((a,b)=>b.value-a.value)[0].index;

    return pics[index]
  }
}
