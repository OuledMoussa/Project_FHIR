import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  patientsArray: any;
  newObs = {
    'id': null,
    'resourceType': 'Observation',
    'status': 'final',
    'code': {
      'coding': [
        {
          'system': 'http://loinc.org',
          'code': null,
          'display': null
        }
      ]
    },
    'subject': {
/*         'reference': 'Patient/5ba8b75b2eef950010bbb5b1'
 */        'reference': null
    },
/*     'issued': '2013-04-03T15:30:10+01:00',
 */    'issued': null,
    'performer': [
      {
        'reference': null,
        'display': null
      }
    ],
    'component': [
      {
        'code': {
          'coding': [
            {
              'system': 'http://loinc.org',
              'code': '51967-8',
              'display': 'Genetic disease assessed'
            }
          ]
        },
        'referenceRange': [
          {
            'high': {
              'value': '',
              'unit': 'mmol/L',
              'system': 'http://unitsofmeasure.org',
              'code': 'mmol/L'
            }
          }
        ]
      }
    ]
  };
  
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getPatients().subscribe((value) => {
      console.log(value);
      this.patientsArray = value;
    });
    this.createObs();
  }
  createObs() {
    this.newObs.component[0].code.coding[0].code = 'abcd';
    console.log(this.newObs);
/*     this.dataService.createObs(this.newObs);
 */  }

  getRandID() {
    const min = Math.ceil(100000000000000);
    const max = Math.floor(1000000000000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
