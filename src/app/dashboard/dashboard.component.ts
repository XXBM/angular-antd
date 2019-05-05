import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test/test.service';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  heroes: string[];

  constructor( private heroService: TestService,
               private message: NzMessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      data => {
        this.heroes = data;
      },
      error => {
        this.message.error('载入数据错误。');
      }
    );
  }
  getTest(): void {
    this.message.info(this.heroes.toString());
  }

  ngOnInit(): void {
  }

}
