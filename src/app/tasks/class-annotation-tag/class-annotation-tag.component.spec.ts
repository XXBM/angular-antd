import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAnnotationTagComponent } from './class-annotation-tag.component';

describe('ClassAnnotationTagComponent', () => {
  let component: ClassAnnotationTagComponent;
  let fixture: ComponentFixture<ClassAnnotationTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAnnotationTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAnnotationTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
