import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  private getDomainNameWithTitleUrl = `/automation/getDomainNamesWithTitle`;
  private getDaoNameWithTitleUrl = `/automation/getDaoNamesWithTitle`;
  private getServiceNameWithTitleUrl = `/automation/getServiceNamesWithTitle`;
  private generateDaoUrl = '/automation/generateDaoFile';
  private generateServiceUrl = '/automation/generateServiceFile';
  private generateControllerUrl = '/automation/generateControllerFile';
  constructor(private http: HttpClient) { }

  /*获取所有domain名*/
  getDomainsWithTitle(): Observable<{}> {
    return this.http.get(this.getDomainNameWithTitleUrl);
  }
  /*获取所有service类名*/
  getDaosWithTitle(): Observable<{}> {
    return this.http.get(this.getDaoNameWithTitleUrl);
  }
  /*获取所有controller名*/
  getServicesWithTitle(): Observable<{}> {
    return this.http.get(this.getServiceNameWithTitleUrl);
  }

  /*生成dao*/
  generateDaoFiles(daoNames: string[]): Observable<{}> {
    const params = new HttpParams()
      .append('daoNames', `${daoNames}`);
    return this.http.get(`${this.generateDaoUrl}`, {
      params
    });
  }

  /*生成service*/
  generateServiceFiles(serviceNames: string[]): Observable<{}> {
    const params = new HttpParams()
      .append('serviceNames', `${serviceNames}`);
    return this.http.get(`${this.generateServiceUrl}`, {
      params
    });
  }

  /*生成controller*/
  generateControllerFiles(controllerNames: string[]): Observable<{}> {
    const params = new HttpParams()
      .append('controllerNames', `${controllerNames}`);
    return this.http.get(`${this.generateControllerUrl}`, {
      params
    });
  }
}
