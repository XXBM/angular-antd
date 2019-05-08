import { Component, OnInit } from '@angular/core';
import { UploadService } from '../core/upload/upload.service';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor( private uploadService: UploadService,
               private message: NzMessageService) { }
  /*清空缓存*/
  clearFile(): void {
    this.uploadService.clearFile().subscribe(
      data => {
        this.message.success('缓存清空成功！');
      },
      error => {
        this.message.error('缓存清空失败！请重试！');
      }
    );
  }

  ngOnInit(): void {
  }

}
