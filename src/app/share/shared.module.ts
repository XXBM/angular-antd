import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
  ]

})
export class SharedModule { }
