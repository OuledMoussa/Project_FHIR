import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
/*   params = new HttpParams().append('participant.actor.reference', 'Patient/5ba8b75b2eef950010bbb5b1');
 */  params = new HttpParams().append('participant.actor.reference', 'Practitioner/5ba8b7742eef950010bbb5b3');




  getPractData() {
    return this.http.get(environment.baseUrl + 'practitioner/' + environment.practId);
  }

  getAppointment() {
    return this.http.get(environment.baseUrl + 'appointment', {params: this.params});
  }


}
