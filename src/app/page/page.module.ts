import { NgModule } from '@angular/core';
import { SharedModule } from '../share/shared.module';

import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class PageModule {
}
