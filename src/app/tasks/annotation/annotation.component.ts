import {Component, OnInit, ViewChild} from '@angular/core';
import {TestService} from '../../core/test/test.service';
import {TableService} from '../../core/test/table.service';
import {AddAnnotationService} from '../../core/add-annotation/add-annotation.service';
import {NzMessageService} from 'ng-zorro-antd';
import { AnnotationTag } from './annotation-tag/annotation-tag';
import {AnnotationTagComponent} from './annotation-tag/annotation-tag.component';
import {ClassAnnotationTagComponent} from './class-annotation-tag/class-annotation-tag.component';



@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.less']
})
export class AnnotationComponent implements OnInit {
  /*从后台请求下来的注解集合*/
  webVariableAnnotationTags: AnnotationTag[];
  /*从后台请求下来的类注解集合*/
  webClassAnnotationTags: Set<AnnotationTag>;
  /*表格中每个字段已经添加的注解集合*/
  filedAnnotationTags: Set<AnnotationTag>;
  /*已经选择但是没有真正添加的注解集合，注意这个集合每次要清空*/
  preSelectedAnnotationTags: Set<AnnotationTag>;
  /*创建一个字段与注解集合相匹配的map集合*/
  filedAnnotationMap = new Map<string, Set<AnnotationTag>>();
  /*是否点击了添加注解的按钮*/
  isPressAddAnnotation = false;
  /*被点击行的名字*/
  rowPropertyName: string;
  /*之前选择的类的名称*/
  /*要提交的属性注解*/
  selectedVariableAnnotationTags = new Map<string, string[]>();
  /*要提交的类注解*/
  selectedClassAnnotationTags: string[];
  /*属性注解数组的中间变量*/
  selectedVariableAnnotationTemporal: string[];
  preClassName = '';
  @ViewChild('annotationTagComponent')
  annotationTagComponent: AnnotationTagComponent; // 父组件中获得子组件的引用
  @ViewChild('classAnnotationTagComponent')
  classAnnotationTagComponent: ClassAnnotationTagComponent; // 父组件中获得子组件的引用
  // 是否展示下面的内容
  isShow = false;
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
    if (this.title === null) {
      this.isShow = false;
    } else {
      if (this.preClassName !== this.title) {
        this.resetParam();
        this.preClassName = this.title;
        if (this.webClassAnnotationTags) {
          this.webClassAnnotationTags.forEach((value, array) => {
            value.isChecked = 0;
          });
        }
      }
      this.isShow = true;
      this.searchData();
      this.message.info(this.title);
    }
  }


  /*将参数重置*/
  resetParam(): void {
    this.filedAnnotationMap.clear();
    if (this.classAnnotationTagComponent && this.classAnnotationTagComponent.selectedClassAnnotationTags) {
      this.classAnnotationTagComponent.selectedClassAnnotationTags.clear();
    }
    if (this.filedAnnotationTags) {
      this.filedAnnotationTags.clear();
    }
    if (this.preSelectedAnnotationTags) {
      this.preSelectedAnnotationTags.clear();
    }
    this.isPressAddAnnotation = false;
  }


  /*初始化*/
  ngOnInit() {
    this.getDomains();
    this.getVariableAnnotaions();
    this.getClassAnnotaions();
  }


  /*获取所有字段的注解*/
  getVariableAnnotaions(): void {
   this.addAnnotationService.getAllVariableAnnotations().subscribe(annotationTags => this.webVariableAnnotationTags = annotationTags);
  }


  /*获取所有类的注解*/
  getClassAnnotaions(): void {
    this.addAnnotationService.getAllClassAnnotations().subscribe(annotationTags => this.webClassAnnotationTags = annotationTags);
  }
  // 添加注解
  handleAddAnnotation(): void {
    this.selectedVariableAnnotationTags.clear();
    if (this.filedAnnotationMap.size === 0 || this.classAnnotationTagComponent.selectedClassAnnotationTags.size === 0) {
      this.message.info('请先选择要添加的注解');
    } else {
      this.filedAnnotationMap.forEach(((value, key, map) => {
        this.selectedVariableAnnotationTemporal = [];
        this.filedAnnotationMap.get(key).forEach(
          ((value1, value2, set) => this.selectedVariableAnnotationTemporal.push(value1.simpleAnnotation)));
        this.selectedVariableAnnotationTags.set(key, this.selectedVariableAnnotationTemporal);
      }));
      this.selectedClassAnnotationTags = [];
      this.classAnnotationTagComponent.selectedClassAnnotationTags.forEach(
        ((value, value2, set) => this.selectedClassAnnotationTags.push(value.simpleAnnotation)));
      this.addAnnotationService.submitAnnotation(
        this.title, this.selectedClassAnnotationTags, this.selectedVariableAnnotationTags).subscribe(
          value => {if (value.msg === 'success') { this.message.info('注解添加成功'); } else {this.message.info('注解添加失败'); } });
    }
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
    if (this.webVariableAnnotationTags) {
      this.webVariableAnnotationTags.forEach(((value, index, array) => array[index].isChecked = 0));
    }
  }

  /*显示弹出框*/
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  /*点击表格中的添加注解的按钮之后*/
  handleCreateAnnotation(fieldName: string): void {
    // 每次添加注解前先把之前的状态都清空掉
    this.webVariableAnnotationTags.forEach(((value, index, array) => array[index].isChecked = 0));
    /*点击了添加注解的按钮之后将标志位置为true*/
    this.isPressAddAnnotation = true;
    this.annotationTagComponent.rowPropertyName = fieldName;
    this.rowPropertyName = fieldName;
    this.filedAnnotationTags = this.filedAnnotationMap.get(fieldName);
    if (this.filedAnnotationMap.get(fieldName) == null) {
      this.filedAnnotationTags = new Set<AnnotationTag>();
    } else {
      this.filedAnnotationTags.forEach((value1, value2, set) => this.webVariableAnnotationTags
        [this.webVariableAnnotationTags.indexOf(value1)].isChecked = 1);
    }
  }

  /*处理当子组件中的按钮是不是被点击的事件*/
  handleBtnStatusChanges(tag: number): void {
    /*无论是点击了确定按钮还是取消按钮都视为选择完毕，将表格中对应行的属性重新置为false*/
    this.isPressAddAnnotation = false;
    this.preSelectedAnnotationTags = this.annotationTagComponent.selectedAnnotationTags;
    if (tag === 1) {
      if (this.preSelectedAnnotationTags.size === 0) {
        this.message.info('您还未选择注解');
      } else {
        this.filedAnnotationMap.set(this.rowPropertyName, this.preSelectedAnnotationTags);
      }
    }
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
