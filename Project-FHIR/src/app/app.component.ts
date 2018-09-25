import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataServiceService) { }
  title = 'Project-FHIR';
  data: string;

  getPractData() {
    this.dataService.getPractData()
      .subscribe((value ) => {
          console.log(value);
      });
  }
}
