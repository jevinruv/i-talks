import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RPersonnel } from '../models/RPersonnel';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class NewResourcePersonnelService {

  private apiURL = "https://bitehunter.vimly.ml/iTalks/rest/new-resource-personnels/";

  constructor(private http: HttpClient) { }

  getAllResourcePersonnel(): Observable<RPersonnel[]> {
    return this.http.get<RPersonnel[]>(this.apiURL);
  }

  addResourcePersonnel(registerForm, linkCV: string) {

    let data = {
      First_Name: registerForm.inputFirstName,
      Last_Name: registerForm.inputLastName,
      Current_Role: registerForm.inputCurrentRole,
      Email: registerForm.inputEmail,
      CV_Link: linkCV,
    };

    return this.http.post(this.apiURL, data);
  }

  removeResourcePersonnel(personids) {

    let data = {
      Selected: personids
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.delete(this.apiURL, httpOptions);
  }


  public uploadFile(formdata: any) {
    let _url: string = 'https://bitehunter.vimly.ml/iTalks/rest/fileUpload.php';
    return this.http.post(_url, formdata)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');

  }
}
