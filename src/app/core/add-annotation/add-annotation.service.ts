import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AnnotationTag } from '../../tasks/annotation-tag/annotation-tag';
import {AddAnnotationResponse} from './add-annotation-response';


@Injectable({
  providedIn: 'root'
})
export class AddAnnotationService {

  private getDomainNameUrl = `/automation/getDomainNames`;
  private getVariableUrl = '/automation/getVariablesByDomain';
  private getVariableAnnotationUrl = '/automation/findAllVariableAnnotation';
  private getClassAnnotationUrl = '/automation/findAllClassAnnotation';
  private addAnnotationsUrl = '/automation/addAnnotations';

  constructor(private http: HttpClient) { }


  /*获取所有实体类名*/
  getDomains(): Observable<string[]> {
    return this.http.get<string[]>(this.getDomainNameUrl);
  }

  /*获取所有变量的注解*/
  getAllVariableAnnotations(): Observable<AnnotationTag[]> {
    // @ts-ignore
    return this.http.get<AnnotationTag[]>(this.getVariableAnnotationUrl);
  }


  /*获取所有类的注解*/
  getAllClassAnnotations(): Observable<Set<AnnotationTag>> {
    // @ts-ignore
    return this.http.get<Set<AnnotationTag>>(this.getClassAnnotationUrl);
  }

  /*提交所有的注解*/
  submitAnnotation(className: string, classAnnotations: string[], variableAnnotations: Map<string, string[]>): Observable<AddAnnotationResponse> {
    // const params = new SubmitAnnotationEntity(className, classAnnotations, variableAnnotations);
    const params = new HttpParams()
      .append('className', className)
      .append('classAnnotations', `${classAnnotations}`)
      .append('variableAnnotations', JSON.stringify(Array.from(variableAnnotations)));
    return this.http.post<AddAnnotationResponse>(this.addAnnotationsUrl, params);
  }


  strMapToObj(strMap) {
    const obj = Object.create(null);
    for (const [k, v] of strMap) {
      obj[k] = v;
    }
    return obj;
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
