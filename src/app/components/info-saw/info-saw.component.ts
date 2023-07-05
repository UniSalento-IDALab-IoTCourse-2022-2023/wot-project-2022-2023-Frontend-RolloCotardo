import { Component, Input } from '@angular/core';
import {Saw} from "../../models/saw";
import {SawService} from "../../services/saw.service";
import {MachineService} from "../../services/machine.service";
import {Machine} from "../../models/machine";

@Component({
  selector: 'app-info-saw',
  templateUrl: './info-saw.component.html',
  styleUrls: ['./info-saw.component.scss']
})
export class InfoSawComponent {

  // @ts-ignore
  @Input() item: string;

  intervalId: any;

  machines: Machine[] | null = [];

  saw:Saw | null = {} as Saw;

  constructor(private sawService:SawService, private machineService: MachineService) {
  }

  async ngOnInit() {

    this.machines = await this.machineService.getAll();

    if(this.item == undefined){
      // @ts-ignore
      this.saw = await this.sawService.getLastById(localStorage.getItem('searched'));
    }else{
      this.saw = await this.sawService.getLastById(this.item);
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
        this.saw = await this.sawService.getLastById(localStorage.getItem('searched'));
      }else{
        this.saw = await this.sawService.getLastById(this.item);
      }

    }, 5000); // Esegui ogni 5 secondi (5000 millisecondi)
  }

  stopPolling() {
    clearInterval(this.intervalId);
  }


}
