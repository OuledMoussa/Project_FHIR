import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
/*   params = new HttpParams().append('participant.actor.reference', 'Patient/5ba8b75b2eef950010bbb5b1');
 */  params = new HttpParams().append('participant.actor.reference', 'Practitioner/5ba8b7742eef950010bbb5b3');

 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })
 };

  getPractData() {
    return this.http.get<any>(environment.baseUrl + 'practitioner/' + environment.practId);
  }

  getAppointment() {
    return this.http.get<any>(environment.baseUrl + 'appointment?' + this.params);
  }
  getPatientID(id: string) {
    return this.http.get<any>(environment.baseUrl + id);
  }
  getPatients() {
    return this.http.get<any>(environment.baseUrl + 'patient');
  }

  createObs(data: any) {
    return this.http.post<any>(environment.baseUrl, data, this.httpOptions);
  }
}
