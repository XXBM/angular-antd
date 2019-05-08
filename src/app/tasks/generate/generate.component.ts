import {Component, OnInit, ViewChild} from '@angular/core';
import {DaoComponent} from './dao/dao.component';
import {GenerateService} from '../../core/generate/generate.service';


@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.less']
})
export class GenerateComponent implements OnInit {
  constructor(
    private generateService: GenerateService
  ) { }
  currentStep = 0;

  @ViewChild('childdao')
  childDao: DaoComponent; // 父组件中获得子组件的引用

  ngOnInit() {
  }
  prevStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
    const daoNames: string[] = this.childDao.rightFiles();
    this.generateService.generateDaoFiles(daoNames).subscribe();
  }

}
