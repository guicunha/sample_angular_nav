import { NgModule } from '@angular/core';
import {MasterRoutingModule} from './mater-routing.module';
import {HomeComponent} from '../home/home.component';
import {ReportsComponent} from '../reports/reports.component';
import {CommonModule} from '@angular/common';
import {MasterComponent} from './master.component';
import {MateriaModule} from '../../materia.module';



@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    MateriaModule,
    MasterRoutingModule,
  ],
})
export class MasterModule { }
