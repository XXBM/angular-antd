import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  downloadUrl = '/automation/download';
  constructor(private http: HttpClient) { }

  /*下载*/
  download(): void {
    window.location.href = this.downloadUrl;
  }
}

