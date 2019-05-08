import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  private getDomainNameWithTitleUrl = `/automation/getDomainNamesWithTitle`;
  constructor(private http: HttpClient) { }

  /*获取所有实体类名*/
  getDomainsWithTitle(): Observable<{}> {
    return this.http.get(this.getDomainNameWithTitleUrl);
  }

}
