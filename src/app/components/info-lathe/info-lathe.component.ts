import { Component, Input } from '@angular/core';
import {Saw} from "../../models/saw";
import {SawService} from "../../services/saw.service";
import {Lathe} from "../../models/lathe";
import {LatheService} from "../../services/lathe.service";
import {Machine} from "../../models/machine";
import {MachineService} from "../../services/machine.service";

@Component({
  selector: 'app-info-lathe',
  templateUrl: './info-lathe.component.html',
  styleUrls: ['./info-lathe.component.scss']
})
export class InfoLatheComponent {

  // @ts-ignore
  @Input() item: string;

  intervalId: any;

  machines: Machine[] | null = [];

  lathe:Lathe | null = {} as Lathe;

  constructor(private latheService:LatheService, private machineService: MachineService) {
  }

  async ngOnInit() {
    this.machines = await this.machineService.getAll();

    if(this.item == undefined){
      // @ts-ignore
      this.lathe = await this.latheService.getLastById(localStorage.getItem('searched'));
    }else{
      this.lathe = await this.latheService.getLastById(this.item);
    }

    this.startPolling();
  }

  ngOnDestroy() {
    this.stopPolling();
  }

  startPolling() {
    this.intervalId = setInterval(async () => {

      if(this.item == undefined){
        // @ts-ignore
        this.lathe = await this.latheService.getLastById(localStorage.getItem('searched'));
      }else{
        this.lathe = await this.latheService.getLastById(this.item);
      }

    }, 5000); // Esegui ogni 5 secondi (5000 millisecondi)
  }

  stopPolling() {
    clearInterval(this.intervalId);
  }
}
