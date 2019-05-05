import { NgModule } from '@angular/core';

import { SharedModule } from '../share/shared.module';

import { TasksRoutingModule } from './tasks-routing.module';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { GenerateComponent } from './generate/generate.component';
import { AnnotationComponent } from './annotation/annotation.component';


@NgModule({
  imports: [
    SharedModule,
    TasksRoutingModule
  ],
  declarations: [
    UploadComponent,
    DownloadComponent,
    AnnotationComponent,
    GenerateComponent
  ]
})
export class TasksModule { }
