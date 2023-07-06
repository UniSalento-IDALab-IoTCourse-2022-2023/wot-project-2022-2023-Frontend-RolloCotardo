import { Component } from '@angular/core';
import {Machine} from "../../models/machine";
import {MachineService} from "../../services/machine.service";
import {SawService} from "../../services/saw.service";
import {LatheService} from "../../services/lathe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alarms-search-bar',
  templateUrl: './alarms-search-bar.component.html',
  styleUrls: ['./alarms-search-bar.component.scss']
})
export class AlarmsSearchBarComponent {

  machineSelected: string = "";
  alarmSelected: string = "";

  machine:Machine | null = {} as Machine

  machines: Machine[] | null = [];
  alarms: string[] | undefined = [];

  constructor(private machineService:MachineService) {

  }

  async ngOnInit() {
    this.machines = await this.machineService.getAll();
  }

  async onMachineSelected() {
    this.machine = await this.machineService.getByIdMacchinario(this.machineSelected);
    this.alarms = this.machine?.allarmi;
  }


  onClick() {

    if(this.machineSelected.includes("Sega")) {

      localStorage.setItem('searched', this.machineSelected);

      if(this.alarmSelected.includes("Tensione")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Allineamento")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Velocità")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Rotazione")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Lubrificante")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Potenza")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }else{
        localStorage.setItem('alarm_searched', "");
      }


    }

    if(this.machineSelected.includes("Tornio")){

      localStorage.setItem('searched', this.machineSelected);

      if(this.alarmSelected.includes("Allineamento")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Vibrazioni")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Rotazione")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Lubrificante")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }
      else if(this.alarmSelected.includes("Potenza")){
        localStorage.setItem('alarm_searched', this.alarmSelected.split(" ")[0]);
      }else{
        localStorage.setItem('alarm_searched', "");
      }

    }

  }



}
