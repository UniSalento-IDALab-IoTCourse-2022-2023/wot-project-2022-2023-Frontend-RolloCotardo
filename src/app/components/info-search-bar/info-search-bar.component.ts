import { Component } from '@angular/core';
import {Saw} from "../../models/saw";
import {SawService} from "../../services/saw.service";
import {Machine} from "../../models/machine";
import {MachineService} from "../../services/machine.service";
import {Lathe} from "../../models/lathe";
import {LatheService} from "../../services/lathe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-search-bar',
  templateUrl: './info-search-bar.component.html',
  styleUrls: ['./info-search-bar.component.scss']
})
export class InfoSearchBarComponent {


  machines: Machine[] | null = [];

  saw:Saw | null = {} as Saw;
  lathe:Lathe | null = {} as Lathe;

  ids: string[] = [];

  selected: string = "Tornio1";

  constructor(private machineService:MachineService, private sawService:SawService, private latheService:LatheService, private router: Router) {
  }

  async ngOnInit() {
    this.machines = await this.machineService.getAll();

    // @ts-ignore
    for (const machine of this.machines) {
      this.ids.push(machine.idMacchinario);
    }

  }


  onClick() {

    if(this.selected.includes("Sega")){

      localStorage.setItem('searched', this.selected);

      if (this.router.url === '/home/info' || this.router.url === '/home/info/lathe'){
        this.router.navigate(['/home/info/saw']);
      }
      else if (this.router.url === '/home/charts' || this.router.url === '/home/charts/lathe'){
        this.router.navigate(['/home/charts/saw']);
      }

    }

    if(this.selected.includes("Tornio")){

      localStorage.setItem('searched', this.selected);

      if (this.router.url === '/home/info' || this.router.url === '/home/info/saw'){
        this.router.navigate(['/home/info/lathe']);
      }
      else if (this.router.url === '/home/charts' || this.router.url === '/home/charts/saw'){
        this.router.navigate(['/home/charts/lathe']);
      }

    }
  }

}
