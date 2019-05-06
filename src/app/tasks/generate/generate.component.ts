import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.less']
})
export class GenerateComponent implements OnInit {
  currentStep = 0;
  constructor() { }

  ngOnInit() {
  }
  prevStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

}
