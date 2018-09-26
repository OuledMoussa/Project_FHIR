import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
        this.patientsArray = value });
  }
  checker = 0;
  showGroup(x) {
    switch(x){
      case 'tryg':
        console.log("test");
        this.checker = 1;
        break;
      case 'chol':
        this.checker =  2;
        break;
      case 'gen':
        this.checker =  3;
        break;
      default:
        this.checker =  0;
        break;
    }
  }
}
