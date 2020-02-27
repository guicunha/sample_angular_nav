import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ReportsComponent} from '../reports/reports.component';
import {MasterComponent} from './master.component';
import {MenuDashboardComponent} from '../../menu-dashboard/menu-dashboard.component';
import {MenuComponentComponent} from '../../menu-component/menu-component.component';

//** suburl //
const routes: Routes = [
  { path: 'dashboard', component: MenuComponentComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'reports', component: ReportsComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
