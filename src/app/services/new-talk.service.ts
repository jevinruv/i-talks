import { Talk } from './../models/Talk';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewTalkService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/new-talks/";

  constructor(private http: HttpClient) { }

  getLatestTalk(): Observable<Talk> {
    return this.http.get<Talk>(this.apiURL);
  }

  getAllNewTalks(): Observable<Talk[]> {
    let params = new HttpParams();
    params = params.append("type", "all");

    return this.http.get<Talk[]>(this.apiURL, { params: params });
  }
}
