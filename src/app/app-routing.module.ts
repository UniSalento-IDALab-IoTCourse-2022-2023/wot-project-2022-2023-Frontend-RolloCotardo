import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {InfoSearchBarComponent} from "./components/info-search-bar/info-search-bar.component";
import {AlarmsSearchBarComponent} from "./components/alarms-search-bar/alarms-search-bar.component";
import {InfoSawComponent} from "./components/info-saw/info-saw.component";
import {InfoLatheComponent} from "./components/info-lathe/info-lathe.component";
import {AllInfoComponent} from "./components/all-info/all-info.component";
import {LoginComponent} from "./components/login/login.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ChartsComponent} from "./components/charts/charts.component";
import {SawChartComponent} from "./components/saw-chart/saw-chart.component";
import {LatheChartComponent} from "./components/lathe-chart/lathe-chart.component";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {path:'', component: WelcomeComponent},
      {path: 'charts', component : ChartsComponent, children: [ {path: 'saw', component:SawChartComponent}, {path: 'lathe', component:LatheChartComponent}]},
      {path: 'info', component : InfoSearchBarComponent, children: [{path: '', component:AllInfoComponent}, {path: 'saw', component:InfoSawComponent}, {path: 'lathe', component:InfoLatheComponent}]},
      {path:'alarms', component: AlarmsSearchBarComponent},
    ]
  }

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
