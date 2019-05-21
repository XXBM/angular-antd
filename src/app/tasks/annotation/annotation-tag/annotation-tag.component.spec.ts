import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationTagComponent } from './annotation-tag.component';

describe('AnnotationTagComponent', () => {
  let component: AnnotationTagComponent;
  let fixture: ComponentFixture<AnnotationTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
