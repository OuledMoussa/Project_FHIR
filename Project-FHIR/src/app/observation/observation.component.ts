import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { environment } from 'src/environments/environment';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  patientsArray: any;
  selectedPatient: any;
  modelTryg: any;
  patientControl = new FormControl('patientControl', [Validators.required]);
  catControl = new FormControl('catControl', [Validators.required]);
  commentaryControl = new FormControl('commentaryControl', [Validators.required]);
  codeValue: any;



  newObs = {
    'id': null,
    'resourceType': 'Observation',
    'status': 'final',
    'comment': '',
    'code': {
      'coding': [
        {
          'system': 'http://loinc.org',
          'code': null,
          'display': null
        }
      ],
      'text': ''
    },
    'subject': {
/*         'reference': 'Patient/5ba8b75b2eef950010bbb5b1'
 */        'reference': ''
    },
/*     'issued': '2013-04-03T15:30:10+01:00',
 */    'issued': '',
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
  checker = 0;
  today = new Date('05 October 2011 14:48 UTC');



  ngOnInit() {
    this.dataService.getPatients().subscribe((value) => {
      // console.log(value);
      this.patientsArray = value;
    });

    // this.createObs();
  }


  getRandID() {
    const min = Math.ceil(100000000000000);
    const max = Math.floor(1000000000000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createObs() {
    // this.newObs.component[0].code.coding[0].code = selected.value();
    this.newObs.id = this.getRandID();
    const now = new Date();
    this.newObs.issued = now.toISOString();
    this.newObs.subject.reference = 'Patient/' + this.patientControl.value;
    this.newObs.performer[0].reference = 'Practitioner/' + environment.practId;
    this.newObs.comment = this.commentaryControl.value;
    this.newObs.code.coding[0].code = this.codeValue;
    this.dataService.createObs(this.newObs);
  }
  setValueCode(value: any) {
    this.codeValue= value;
  }

  showGroup(x) {
    switch (x) {
      case 'tryg':
        this.checker = 1;
        break;
      case 'chol':
        this.checker = 2;
        break;
      case 'gen':
        this.checker = 3;
        break;
      default:
        this.checker = 0;
        break;
    }
  }


}
