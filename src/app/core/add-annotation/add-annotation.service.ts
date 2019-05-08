import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddAnnotationService {

  private getDomainNameUrl = `/automation/getDomainNames`;
  private getVariableUrl = '/automation/getVariablesByDomain';

  constructor(private http: HttpClient) { }


  /*获取所有实体类名*/
  getDomains(): Observable<string[]> {
    return this.http.get<string[]>(this.getDomainNameUrl);
  }

  /*获取某个指定类的变量集合*/
  getVariables(
    pageIndex: number,
    pageSize: number,
    domainName: string
  ): Observable<{}> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('rows', `${pageSize}`)
      .append('fileName', `${domainName}`);
    return this.http.get(`${this.getVariableUrl}`, {
      params
    });
  }

}
