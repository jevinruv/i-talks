import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RPersonnel } from '../models/RPersonnel';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ActiveResourcePersonnelService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/active-resource-personnels/";

  constructor(private http: HttpClient) { }

  getAllResourcePersonnel(): Observable<RPersonnel[]> {
    return this.http.get<RPersonnel[]>(this.apiURL);
  }

  addResourcePersonnel(personids) {

    let data = {
      Selected: personids
    };

    return this.http.post(this.apiURL, data);
  }
}
