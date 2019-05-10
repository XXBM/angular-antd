import {Component, Input, OnInit} from '@angular/core';
import {AnnotationTag} from '../annotation-tag/annotation-tag';

@Component({
  selector: 'app-class-annotation-tag',
  templateUrl: './class-annotation-tag.component.html',
  styleUrls: ['./class-annotation-tag.component.less']
})
export class ClassAnnotationTagComponent implements OnInit {

  // 注解标签，每个标签里
  @Input() classAnnotationTags: Set<AnnotationTag>;
  // 被选择的标签的集合
  selectedClassAnnotationTags = new Set<AnnotationTag>();
  constructor() { }

  ngOnInit() {
  }


  handleCheckChange(checkTag: boolean, annoationTag: AnnotationTag): void {
    if (checkTag) {
      annoationTag.isChecked = 1;
      this.selectedClassAnnotationTags.add(annoationTag);
    } else {
      annoationTag.isChecked = 0;
      this.selectedClassAnnotationTags.delete(annoationTag);
    }
  }

  sliceTagName(tag: string): string {
    return tag;
  }

}
