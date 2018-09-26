import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentsArray = [];
  constructor(private dataService: DataServiceService) { }
  // ngOnInit() {
  //   console.log(this.appointmentsArray);
  //     this.dataService.getAppointment().subscribe((value ) => {
  //           value.forEach(function(apoint) {
  //             apoint.participant.forEach(function(part){
  //               if(part.actor.reference=="Practitioner/5ba8b7742eef950010bbb5b3"){
  //                   console.log(appointmentsArray);
  //                 //this.appointmentsArray.add(apoint);
  //               };
  //             });
  //           });
  //     });
  // }
  ngOnInit(){
    this.dataService.getAppointment().subscribe((value) => {
        this.appointmentsArray = value });
    }
  }
