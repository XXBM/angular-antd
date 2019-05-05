import { NgModule } from '@angular/core';

import { SharedModule } from '../share/shared.module';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';


@NgModule({
  imports: [
    SharedModule,
    ManagementRoutingModule
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
