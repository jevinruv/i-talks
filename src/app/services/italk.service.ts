import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Talk } from '../models/Talk';

@Injectable()
export class ItalkService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/italks/";

  constructor(private http: HttpClient) { }


  getTalks():Observable<Talk[]>{
    return this.http.get<Talk[]>(this.apiURL);
  }

}
