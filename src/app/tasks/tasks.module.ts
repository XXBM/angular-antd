import { NgModule } from '@angular/core';

import { SharedModule } from '../share/shared.module';

import { TasksRoutingModule } from './tasks-routing.module';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { GenerateComponent } from './generate/generate.component';
import { AnnotationComponent } from './annotation/annotation.component';
import {DaoComponent} from './generate/dao/dao.component';
import {ServiceComponent} from './generate/service/service.component';
import {ControllerComponent} from './generate/controller/controller.component';
import {AnnotationDialogComponent} from './annotation/annotation-dialog/annotation-dialog.component';
import { AnnotationTagComponent } from './annotation-tag/annotation-tag.component';
import { ClassAnnotationTagComponent } from './class-annotation-tag/class-annotation-tag.component';

@NgModule({
  imports: [
    SharedModule,
    TasksRoutingModule
  ],
  declarations: [
    UploadComponent,
    DownloadComponent,
    AnnotationComponent,
    GenerateComponent,
    DaoComponent,
    ServiceComponent,
    ControllerComponent,
    AnnotationDialogComponent,
    AnnotationTagComponent,
    ClassAnnotationTagComponent
  ]
})
export class TasksModule { }
