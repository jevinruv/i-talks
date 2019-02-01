import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

@Injectable()
export class AuthService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/manage-user/";
  user: User;

  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    let params = new HttpParams();
    params = params.append("email", user.Email);
    params = params.append("password", user.Password);

    return this.http.get<User>(this.apiURL, { params: params });
  }

}
