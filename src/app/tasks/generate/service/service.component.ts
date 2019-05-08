import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {GenerateService} from '../../../core/generate/generate.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {
  /*穿梭框数据*/
  daos: {};
  /*穿梭时传的数据*/
  servicesing: {};


  constructor( private message: NzMessageService,
               private generateService: GenerateService) { }

  /*左框-所有实体类*/
  getDaoWithTitle(): void {
    this.generateService.getDaosWithTitle().subscribe(
      data => {
        this.daos = data;
      },
      error => {
        this.message.error('载入数据错误。');
      }
    );
  }

  ngOnInit() {
    this.getDaoWithTitle();
  }

  /*选中某一个时触发的方法*/
  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  /*穿梭时触发的方法*/
  change(ret: {list}): void {
    this.servicesing = ret.list;
    console.log(ret);
    console.log( ret.list);
    console.log( JSON.stringify(ret.list));

  }

  /*给父组件返回要生成的类名数组*/
  rightServiceFiles(): string[] {
    const str = [];
    // tslint:disable-next-line:forin
    for (const item in this.servicesing) {
      str.push(this.servicesing[item].title);
    }
    return str;
  }

}
