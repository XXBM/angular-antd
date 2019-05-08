import { Component, OnInit } from '@angular/core';
import {TestService} from '../../core/test/test.service';
import {TableService} from '../../core/test/table.service';
import {AddAnnotationService} from '../../core/add-annotation/add-annotation.service';
import {NzMessageService} from 'ng-zorro-antd';



@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.less']
})
export class AnnotationComponent implements OnInit {
  /*下拉框变量-所有实体类*/
  domains: string[];

  /*表格变量*/
  selectedValue: string;
  pageIndex = 1;
  pageSize = 5;
  total = 1;
  listOfData = [];
  loading = true;


  /*弹出框变量*/
  isVisible = false;


  /*标题*/
  title = '';

  listOfOption = [];
  listOfSelectedValue: string[] = [];

  editCache: { [key: string]: any } = {};

  /*构造器*/
  constructor( private heroService: TestService,
               private message: NzMessageService,
               private tableService: TableService,
               private addAnnotationService: AddAnnotationService) { }
  /*下拉框-所有实体类*/
  getDomains(): void {
    this.addAnnotationService.getDomains().subscribe(
      data => {
        this.domains = data;
        this.listOfOption = data;
      },
      error => {
        this.message.error('载入数据错误。');
      }
    );
  }
  /*下拉框选择事件*/
  select(): void {
    this.title = this.selectedValue;
    this.searchData();
    this.message.info(this.title);
  }


  /*初始化*/
  ngOnInit() {
    this.getDomains();
  }

  /*表格数据-某个实体类的变量*/
  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.addAnnotationService
      .getVariables(this.pageIndex, this.pageSize, this.selectedValue)
      .subscribe((data: any) => {
        this.loading = false;
        this.total = data.total;
        this.listOfData = data.variableDomains;
      });
  }

  /*显示弹出框*/
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  /*表格内注解下拉框*/
  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }


  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    this.editCache[id].edit = false;
  }


  getField(data: any): void {
   console.log(data.name);
  }



}
