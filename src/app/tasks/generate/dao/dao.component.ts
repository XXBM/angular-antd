import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {GenerateService} from '../../../core/generate/generate.service';

@Component({
  selector: 'app-dao',
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.less']
})
export class DaoComponent implements OnInit {
  /*穿梭框数据*/
  domains: {};


  constructor( private message: NzMessageService,
               private generateService: GenerateService) { }

  /*左框-所有实体类*/
  getDomainWithTitle(): void {
    this.generateService.getDomainsWithTitle().subscribe(
      data => {
        this.domains = data;
      },
      error => {
        this.message.error('载入数据错误。');
      }
    );
  }

  ngOnInit() {
    this.getDomainWithTitle();
  }

  /*选中某一个时触发的方法*/
  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  /*穿梭时触发的方法*/
  // @ts-ignore
  change(ret: {from, to, list}): void {
      // tslint:disable-next-line:forin
      for (const item in this.domains) {
        for (const i in ret.list) {
          if (ret.list[i].title === this.domains[item].title) {
            this.domains[item].direction = ret.to;
          }
        }
      }
      console.log(ret);
      console.log( ret.list);
      console.log( JSON.stringify(ret.list));

  }

  /*给父组件返回要生成的类名数组*/
    rightDaoFiles(): string[] {
    const str = [];
    // tslint:disable-next-line:forin
    for (const item in this.domains) {
      if (this.domains[item].direction === 'right') {
        str.push(this.domains[item].title);
      }
    }
    return str;
  }

}
