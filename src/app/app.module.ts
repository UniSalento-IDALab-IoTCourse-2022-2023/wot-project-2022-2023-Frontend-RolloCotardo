import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { InfoSawComponent } from './components/info-saw/info-saw.component';
import { InfoLatheComponent } from './components/info-lathe/info-lathe.component';
import { InfoSearchBarComponent } from './components/info-search-bar/info-search-bar.component';
import { AlarmsSearchBarComponent } from './components/alarms-search-bar/alarms-search-bar.component';
import {AlarmService} from "./services/alarm.service";
import {SawService} from "./services/saw.service";
import {LatheService} from "./services/lathe.service";
import { AllInfoComponent } from './components/all-info/all-info.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChartsComponent } from './components/charts/charts.component';
import { SawChartComponent } from './components/saw-chart/saw-chart.component';
import { LatheChartComponent } from './components/lathe-chart/lathe-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlarmComponent,
    InfoSawComponent,
    InfoLatheComponent,
    InfoSearchBarComponent,
    AlarmsSearchBarComponent,
    AllInfoComponent,
    LoginComponent,
    WelcomeComponent,
    ChartsComponent,
    SawChartComponent,
    LatheChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AlarmService, SawService, LatheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
