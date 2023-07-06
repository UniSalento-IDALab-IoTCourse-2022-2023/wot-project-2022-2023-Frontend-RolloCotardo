import { Component } from '@angular/core';
import {Alarm} from "../../models/alarm";
import {AlarmService} from "../../services/alarm.service";
import {interval} from 'rxjs';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent {

  alarmsArray: Alarm[] | null = [];

  currentPage = 0;
  componenti: Alarm [][] = [];

  totalPages = this.componenti.length;



  constructor(private alarmService:AlarmService) {
  }

  ngOnInit() {
    localStorage.setItem('searched', "");
    localStorage.setItem('alarm_searched', "");
    this.startAlarmsInterval();
  }

  startAlarmsInterval() {
    setInterval(async () => {

      if(localStorage.getItem('searched') === "" && localStorage.getItem('alarm_searched') === ""){
        this.alarmsArray = await this.alarmService.getAllAlarms();
      }
      else if(localStorage.getItem('searched') != "" && localStorage.getItem('alarm_searched') === ""){
        // @ts-ignore
        this.alarmsArray = await this.alarmService.getAlarmByMachine(localStorage.getItem('searched'));
      }else{
        // @ts-ignore
        this.alarmsArray = await this.alarmService.getAlarmByMachineAndAlarm(localStorage.getItem('searched'), localStorage.getItem('alarm_searched'));
      }

      this.componenti = []; // Cancella l'array componenti prima di aggiornarlo

      // @ts-ignore
      for (let i = 0; i < this.alarmsArray.length; i += 5) {
        // @ts-ignore
        const riga: Alarm[] = this.alarmsArray.slice(i, i + 5);
        this.componenti.push(riga);
      }
    }, 1000);
  }



  getComponentiPaginaCorrente(): Alarm[] {
    return this.componenti[this.currentPage];
  }

  previousPage() {
    this.currentPage--;
  }

  nextPage() {
    this.currentPage++;
  }



}
