import {Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';
// import { AnnotationTags } from './annotation-tags';
import {AnnotationTag} from './annotation-tag';

@Component({
  selector: 'app-annotation-tag',
  templateUrl: './annotation-tag.component.html',
  styleUrls: ['./annotation-tag.component.less']
})
export class AnnotationTagComponent implements OnInit {
  // 注解标签，每个标签里面包含三个属性
  @Input() annotationTags: AnnotationTag[];
  // 标签是不是嵌套在了表格的行里面
  @Input() isTableRowTag: boolean;
  // 标签是不是可以被点击
  @Input() isCheckable: boolean;
  /*表格中所有的字段对应注解构成的map集合*/
  @Input() filedAnnotationMap: Map<string, Set<AnnotationTag>>;
  /*当前操作的属性的名称*/
  @Input() rowPropertyName: string;
  // 子组件输出数据供父组件调用,如果传递回去的值是1表示的是确定，如果是0表示的取消
  @Output() buttonStatusChange = new EventEmitter<number>();
  // 被选择的注解的集合
  selectedAnnotationTags = new Set<AnnotationTag>();
  // 属性对应的注解集合
  propertyAnnotationTags: Set<AnnotationTag>;
  constructor() { }

  ngOnInit() {
  }

  handleClose(removedTag: AnnotationTag): void {
    this.handleCheckChange(false, removedTag);
  }

  handleConfirm(): void {
    this.buttonStatusChange.emit(1);
  }

  handleCheckChange(checkTag: boolean, annoationTag: AnnotationTag): void {
    this.propertyAnnotationTags = this.filedAnnotationMap.get(this.rowPropertyName);
    if (this.propertyAnnotationTags == null) {
      this.filedAnnotationMap.set(this.rowPropertyName, new Set<AnnotationTag>());
    }
    if (checkTag) {
      annoationTag.isChecked = 1;
      this.filedAnnotationMap.get(this.rowPropertyName).add(annoationTag);
      this.selectedAnnotationTags = this.filedAnnotationMap.get(this.rowPropertyName);
    } else {
      annoationTag.isChecked = 0;
      this.filedAnnotationMap.get(this.rowPropertyName).delete(annoationTag);
      this.selectedAnnotationTags = this.filedAnnotationMap.get(this.rowPropertyName);
    }
  }

  sliceTagName(tag: string): string {
    return tag;
  }

}
