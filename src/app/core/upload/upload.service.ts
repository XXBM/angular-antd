import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UploadFile} from 'ng-zorro-antd';


@Injectable({
  providedIn: 'root'
})

export class UploadService {
  clearUrl = '/automation/clear';
  deleteSingleFileUrl = '/automation/deleteFile';
  getDomainFilUrl = '/automation/getDomainFiles';
  constructor(private http: HttpClient) { }


  /*清除缓存*/
  // tslint:disable-next-line:ban-types
  clearFile(): Observable<Object> {
    // @ts-ignore
    // tslint:disable-next-line:ban-types
    return this.http.post<Object>(this.clearUrl);
  }

  /*删除单个文件*/
  deleteFile(fileName: string): Observable<{}>  {
    console.log(fileName);
    const url = `${this.deleteSingleFileUrl}/?fileName=${fileName}`;
    return this.http.delete(url);
  }

  /*获取实体类*/
  // @ts-ignore
  getDomainFile(): Observable<Map<>> {
    // @ts-ignore
    return this.http.get<Map<>>(this.getDomainFilUrl);
  }
}
