import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  isFetching = false;
  constructor( ) {
  }

  ngOnInit() {
  }
}
