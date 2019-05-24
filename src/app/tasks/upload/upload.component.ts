import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {UploadService} from '../../core/upload/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  fileList: UploadFile[any];
  fileType: 'java';

  constructor(private msg: NzMessageService,
              private uploadService: UploadService) { }

  ngOnInit() {
    this.getAllDomains();
  }

  /*获取上传成功的所有文件*/
  getAllDomains(): void {
    this.uploadService.getAllDomainFiles().subscribe(
      data => {
        this.fileList = data;
      },
      error => {
        this.msg.error('载入数据错误。');
      }
    );
  }
  /*文件上传状态*/
  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {

    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.getAllDomains();
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  /*删除单个文件*/
  handleRemove = (file: UploadFile): boolean => {
      if (file.status === 'removed') {
        this.uploadService.deleteFile(file.name).subscribe();
        return true;
      }
      return false;
  }

}
