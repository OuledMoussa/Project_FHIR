import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
/*   params = new HttpParams().append('participant.actor.reference', 'Patient/5ba8b75b2eef950010bbb5b1');
 */  params = new HttpParams().append('participant.actor.reference', 'Practitioner/5ba8b7742eef950010bbb5b3');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPractData() {
    return this.http.get<any>(environment.baseUrl + 'practitioner/' + environment.practId);
  }

  getAppointment() {
    return this.http.get<any>(environment.baseUrl + 'appointment?' + this.params);
  }
  getPatients() {
    return this.http.get<any>(environment.baseUrl + 'patient');
  }

  handleError = (error: Response) => {
    console.log(error);
    // Do messaging and error handling here
    return Observable.throw(error);
  }

  createObs(data: any) {
    /* return this.http.post<any>(environment.baseUrl + 'observation', data, this.httpOptions).pipe(
      catchError(e => this.handleError(e))).subscribe(); */

      return this.http.post<any>(environment.baseUrl + 'observation', data, this.httpOptions).subscribe();

/*     return this.http.post(environment.baseUrl + 'observation', data, this.httpOptions).pipe(
      catchError((error: any) => Observable.throw(error.json().error || 'Server error'))
      /* .subscribe() ); */
  }
}
