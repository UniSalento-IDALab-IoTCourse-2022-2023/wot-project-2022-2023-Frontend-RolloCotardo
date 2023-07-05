import { Injectable } from '@angular/core';
import {Alarm} from "../models/alarm";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor() { }

  async getAllAlarms()  : Promise<Alarm[]|null> {
    const apiUrl = 'http://localhost:8080/api/alarms/'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });

      const alarms: Alarm[] = response.data;
      return alarms.reverse();

    } catch (error) {
      return null;
    }
  }

  async getAlarmByMachine(machine: string)  : Promise<Alarm[]|null> {
    const apiUrl = 'http://localhost:8080/api/alarms/find/' + machine

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });

      const alarms: Alarm[] = response.data;
      return alarms.reverse();

    } catch (error) {
      return null;
    }
  }

  async getAlarmByMachineAndAlarm(machine: string, alarm_searched: string)  : Promise<Alarm[]|null> {


    const apiUrl = 'http://localhost:8080/api/alarms/find/' + machine

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });

      const all_alarms: Alarm[] = response.data;

      const alarms: Alarm[] = [];

      for (const alarm of all_alarms) {

        // @ts-ignore
        if(alarm.tipologia.toLowerCase().includes(alarm_searched.toLowerCase())){
          alarms.push(alarm);
        }
      }

      return alarms.reverse();



    } catch (error) {
      return null;
    }
  }


}
