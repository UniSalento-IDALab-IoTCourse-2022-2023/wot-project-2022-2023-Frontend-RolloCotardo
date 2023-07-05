import { Component } from '@angular/core';
import {AlarmService} from "../../services/alarm.service";
import {MachineService} from "../../services/machine.service";
import {Machine} from "../../models/machine";

@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrls: ['./all-info.component.scss']
})
export class AllInfoComponent {

  constructor(private machineService:MachineService) {
  }

  machines: Machine[] | null = [];

  sawsArray: string[] = [];

  lathesArray: string[] = [];

  async ngOnInit() {
    this.machines = await this.machineService.getAll();

    // @ts-ignore
    for (const machine of this.machines) {

      if(machine.idMacchinario.includes("Sega") && !this.sawsArray.includes(machine.idMacchinario)){
        this.sawsArray.push(machine.idMacchinario);
      }

      if(machine.idMacchinario.includes("Tornio") && !this.lathesArray.includes(machine.idMacchinario)){
        this.lathesArray.push(machine.idMacchinario);
      }
    }
  }

}
