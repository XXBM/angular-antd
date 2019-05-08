import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  private getDomainNameWithTitleUrl = `/automation/getDomainNamesWithTitle`;
  private generateDaoUrl = '/automation/generateDaoFile';
  constructor(private http: HttpClient) { }

  /*获取所有实体类名*/
  getDomainsWithTitle(): Observable<{}> {
    return this.http.get(this.getDomainNameWithTitleUrl);
  }


  /*生成dao*/
  generateDaoFiles(daoNames: string[]): Observable<{}> {
    const params = new HttpParams()
      .append('daoNames', `${daoNames}`);
    return this.http.get(`${this.generateDaoUrl}`, {
      params
    });
  }
}
