import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';


import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  appointmentsArray: any;
  patientArray: any;

  constructor(private dataService: DataServiceService, private modal: NgbModal) {
  }

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [

  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  addInCalendar() {
    for (let rdv of this.appointmentsArray) {
      var myevent = {
        start: new Date(rdv['start']),
        end: new Date(rdv['end']),
        title: rdv['description'],
        color: colors.red,
        actions: this.actions,
        comment: rdv['comment'],
        id: rdv['id'],
        patientNom: rdv['participant'][0]['actor']['display'],
        priority: rdv['priority']
      };
      this.events.push(myevent);
    }
    this.refresh.next();
  }

  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    //Genere une erreur mais fonctionne
    // Due au handlerEvevent dans le html 
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  ngOnInit() {
    this.dataService.getAppointment().subscribe((value) => {

      this.appointmentsArray = value;
      this.addInCalendar();

    });

  }

}
