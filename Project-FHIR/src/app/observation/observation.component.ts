import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  patientsArray : any;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPatients().subscribe((value) => {
      console.log(value);
        this.patientsArray = value });
  }

}
