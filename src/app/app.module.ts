import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InfoSawComponent } from './components/info-saw/info-saw.component';
import { InfoLatheComponent } from './components/info-lathe/info-lathe.component';
import { InfoSearchBarComponent } from './components/info-search-bar/info-search-bar.component';
import {AlarmService} from "./services/alarm.service";
import {SawService} from "./services/saw.service";
import {LatheService} from "./services/lathe.service";
import { AllInfoComponent } from './components/all-info/all-info.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoSawComponent,
    InfoLatheComponent,
    InfoSearchBarComponent,
    AllInfoComponent,
    LoginComponent,
    WelcomeComponent,
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
