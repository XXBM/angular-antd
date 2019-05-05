import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload/upload.component';
import {AnnotationComponent} from './annotation/annotation.component';
import {GenerateComponent} from './generate/generate.component';
import {DownloadComponent} from './download/download.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UploadComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'annotation', component: AnnotationComponent},
  { path: 'generate', component: GenerateComponent},
  { path: 'download', component: DownloadComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
