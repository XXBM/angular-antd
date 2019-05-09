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
  // @ts-ignore
  change(ret: {from, to, list}): void {
    // tslint:disable-next-line:forin
    for (const item in this.daos) {
      for (const i in ret.list) {
        if (ret.list[i].title === this.daos[item].title) {
          this.daos[item].direction = ret.to;
        }
      }
    }
    console.log(ret);
    console.log( ret.list);
    console.log( JSON.stringify(ret.list));

  }

  /*给父组件返回要生成的类名数组*/
  rightServiceFiles(): string[] {
    const str = [];
    // tslint:disable-next-line:forin
    for (const item in this.daos) {
      if (this.daos[item].direction === 'right') {
        str.push(this.daos[item].title);
      }
    }
    return str;
  }

}
