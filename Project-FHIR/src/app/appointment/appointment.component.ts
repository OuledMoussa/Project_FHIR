import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentsArray : any;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(){
    this.dataService.getAppointment().subscribe((value) => {

        this.appointmentsArray = value });
    }
  }
