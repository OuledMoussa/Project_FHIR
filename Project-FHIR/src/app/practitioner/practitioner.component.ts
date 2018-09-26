import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
import {MatDividerModule} from '@angular/material/divider';


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
  adresse_rue: string;
  adresse_ville: string;
  cp: number;

  ngOnInit() {
    this.dataService.getPractData()
    .subscribe((value ) => {
<<<<<<< Updated upstream
        this.data = value;
        this.nom = value.name[0].family;
        this.prenom = value.name[0].given;
        this.adresse_rue = value.address[0].line[0];
        this.adresse_ville = value.address[0].city;
        this.cp = value.address[0].postalCode;
        console.log(value);
=======
        //this.data = value;
        //this.nom = value.name[0].family;
>>>>>>> Stashed changes
    });
  }

  getPractData() {
  this.dataService.getPractData()
    .subscribe((value ) => {
        this.data = value;
<<<<<<< Updated upstream
        this.nom = value[2].name[0].family;
        /* this.prenom = value.name[0].given; */
=======
      //  this.nom = value.name[0].family;
        /* this.prenom = value.name[0].given; */
        //console.log(value.name[0].family);
>>>>>>> Stashed changes
    });
  }



}
