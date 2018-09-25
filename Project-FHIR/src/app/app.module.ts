import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PractitionerComponent } from './practitioner/practitioner.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ObservationComponent } from './observation/observation.component';

@NgModule({
  declarations: [
    AppComponent,
    PractitionerComponent,
    AppointmentComponent,
    ObservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
