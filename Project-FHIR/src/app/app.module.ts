import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PractitionerComponent } from './practitioner/practitioner.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ObservationComponent } from './observation/observation.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


const appRoutes: Routes = [
  { path: 'pract', component: PractitionerComponent },
  { path: 'obs',      component: ObservationComponent },
  { path: 'appoint',      component: AppointmentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PractitionerComponent,
    AppointmentComponent,
    ObservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatDividerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
