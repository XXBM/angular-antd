import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {UploadService} from '../../core/upload/upload.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  fileList: any;

  constructor(private msg: NzMessageService,
              private uploadService: UploadService) { }

  ngOnInit() {
    this.fileList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }
    ];
  }


  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.success(file.status);
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
