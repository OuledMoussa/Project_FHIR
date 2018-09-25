import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getPractData() {
    return this.http.get(environment.baseUrl + 'practitioner/' + environment.practId);
  }
}
