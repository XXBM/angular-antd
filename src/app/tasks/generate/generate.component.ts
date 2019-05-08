import {Component, OnInit, ViewChild} from '@angular/core';
import {DaoComponent} from './dao/dao.component';
import {ServiceComponent} from './service/service.component';
import {ControllerComponent} from './controller/controller.component';
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

  @ViewChild('childservice')
  childService: ServiceComponent; // 父组件中获得子组件的引用

  @ViewChild('childcontroller')
  childController: ControllerComponent; // 父组件中获得子组件的引用

  ngOnInit() {
  }


  /*生成dao*/
  generateDaoFile() {
    const daoNames: string[] = this.childDao.rightDaoFiles();
    this.generateService.generateDaoFiles(daoNames).subscribe(
      data => {
        this.childService.getDaoWithTitle();
        this.currentStep++;
      },
      error => {

      }
    );
  }


  /*生成service*/
  generateServiceFile() {
    const serviceNames: string[] = this.childService.rightServiceFiles();
    this.generateService.generateServiceFiles(serviceNames).subscribe(
      data => {
        this.childController.getServiceWithTitle();
        this.currentStep++;
      },
      error => {

      }
    );
  }

  /*生成controller*/
  generateControllerFile() {
    this.currentStep++;
    const controllerNames: string[] = this.childController.rightControllerFiles();
    this.generateService.generateControllerFiles(controllerNames).subscribe();
  }

}
