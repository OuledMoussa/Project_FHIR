import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';


@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  data: Object;
  nom: string;
  prenom: string;
  adresse: string;

  ngOnInit() {
    this.dataService.getPractData()
    .subscribe((value ) => {
        this.data = value;
        this.nom = value.name[0].family;
    });
  }

  getPractData() {
  this.dataService.getPractData()
    .subscribe((value ) => {
        this.data = value;
        this.nom = value.name[0].family;
        /* this.prenom = value.name[0].given; */
        console.log(value.name[0].family);
    });
  }



}
