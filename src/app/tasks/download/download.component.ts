import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../../core/download/download.service';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less']
})
export class DownloadComponent implements OnInit {

  constructor( private downloadService: DownloadService,
               private message: NzMessageService) { }
  /*下载*/
  download(): void {
    this.downloadService.download();
  }

  ngOnInit() {
  }


}
