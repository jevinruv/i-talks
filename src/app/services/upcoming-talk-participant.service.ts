import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpcomingTalkParticipant } from '../models/UpcomingTalkParticipant';

@Injectable()
export class UpcomingTalkParticipantService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/upcoming-talk-participants/";

  constructor(private http: HttpClient) { }

  getAllUpcomingTalkParticipants(): Observable<UpcomingTalkParticipant[]> {
    return this.http.get<UpcomingTalkParticipant[]>(this.apiURL);
  }

  getAllUpcomingTalkParticipantsFromId(id): Observable<UpcomingTalkParticipant[]> {
    
    let params = new HttpParams().set('id', id);
    return this.http.get<UpcomingTalkParticipant[]>(this.apiURL, { params });
  }
}
