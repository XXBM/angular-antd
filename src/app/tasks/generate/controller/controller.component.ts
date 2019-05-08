import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {GenerateService} from '../../../core/generate/generate.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.less']
})
export class ControllerComponent implements OnInit {

  /*穿梭框数据*/
  services: {};
  /*穿梭时传的数据*/
  controllersing: {};


  constructor( private message: NzMessageService,
               private generateService: GenerateService) { }

  /*左框-所有实体类*/
  getServiceWithTitle(): void {
    this.generateService.getServicesWithTitle().subscribe(
      data => {
        this.services = data;
      },
      error => {
        this.message.error('载入数据错误。');
      }
    );
  }

  ngOnInit() {
    this.getServiceWithTitle();
  }

  /*选中某一个时触发的方法*/
  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  /*穿梭时触发的方法*/
  change(ret: {list}): void {
    this.controllersing = ret.list;
    console.log(ret);
    console.log( ret.list);
    console.log( JSON.stringify(ret.list));

  }

  /*给父组件返回要生成的类名数组*/
  rightControllerFiles(): string[] {
    const str = [];
    // tslint:disable-next-line:forin
    for (const item in this.controllersing) {
      str.push(this.controllersing[item].title);
    }
    return str;
  }


}
