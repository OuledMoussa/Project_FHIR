import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  data: Object;

  ngOnInit() {
    this.dataService.getObs()
    .subscribe((value ) => {
        this.data = value;
        console.log(this.data);
    });
  }
}



}
