import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import {Machine} from "../../models/machine";
import {Saw} from "../../models/saw";
import {SawService} from "../../services/saw.service";
import {all} from "axios";
@Component({
  selector: 'app-saw-chart',
  templateUrl: './saw-chart.component.html',
  styleUrls: ['./saw-chart.component.scss']
})
export class SawChartComponent {

  public chart: any;

  intervalId: any;

  infoSaw: Saw[] | undefined = [];

  arrayTensione: number[] = [];
  arrayAllineamento: number[] = [];
  arrayAvanzamento: number[] = [];
  arrayRotazione: number[] = [];
  arrayLubrificante: number[] = [];
  arrayPotenza: number[] = [];

  arrayLabels: string[] = [];

  slice: number = 10;
  selectedSlice: number = 10;

  nSlices: number[] = [10, 20, 30];

  constructor(private sawService:SawService) { }

  async ngOnInit() {

    this.createChart();

  }

  ngOnDestroy() {
    this.stopPolling();
  }

  async createChart(){

    this.arrayLabels = [];

    // @ts-ignore
    this.infoSaw = await this.sawService.getById(localStorage.getItem('searched'));

    this.infoSaw = this.infoSaw?.slice(-this.slice)

    if (this.infoSaw != null) {

      for (let i = 0; i < this.infoSaw.length; i++) {
        this.arrayTensione[i] = this.infoSaw[i].tensione;
        this.arrayAllineamento[i] = this.infoSaw[i].allineamento * 100;
        this.arrayAvanzamento[i] = this.infoSaw[i].avanzamento;
        this.arrayRotazione[i] = this.infoSaw[i].rotazione;
        this.arrayLubrificante[i] = this.infoSaw[i].lubrificante;
        this.arrayPotenza[i] = this.infoSaw[i].potenza;

        this.arrayLabels[i] = this.infoSaw[i].timestamp;
      }

    }

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.arrayLabels,
        datasets: [
          {
            label: "Tensione lama [1400-1500 psi]",
            data: this.arrayTensione,
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false
          },
          {
            label: "Allineamento lama [2,5-5 dm]",
            data: this.arrayAllineamento,
            backgroundColor: 'limegreen',
            borderColor: 'limegreen',
            fill: false
          },
          {
            label: "Velocità di avanzamento [50-60 m/minuto]",
            data: this.arrayAvanzamento,
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          },
          {
            label: "Velocità di rotazione [300-400 m/minuto]",
            data: this.arrayRotazione,
            backgroundColor: 'green',
            borderColor: 'green',
            fill: false
          },
          {
            label: "Lubrificante [> 30%]",
            data: this.arrayLubrificante,
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            fill: false
          },
          {
            label: "Potenza [750/975 W]",
            data: this.arrayPotenza,
            backgroundColor: 'orange',
            borderColor: 'orange',
            fill: false
          }

        ]
      },
      options: {
        aspectRatio:4
      }

    });

    this.startPolling();
  }

  startPolling() {
    this.intervalId = setInterval(async () => {

      this.arrayLabels = [];

      // @ts-ignore
      this.infoSaw = await this.sawService.getById(localStorage.getItem('searched'));

      this.infoSaw = this.infoSaw?.slice(-this.slice)

      if (this.infoSaw != null) {

        for (let i = 0; i < this.infoSaw.length; i++) {
          this.arrayTensione[i] = this.infoSaw[i].tensione;
          this.arrayAllineamento[i] = this.infoSaw[i].allineamento * 100;
          this.arrayAvanzamento[i] = this.infoSaw[i].avanzamento;
          this.arrayRotazione[i] = this.infoSaw[i].rotazione;
          this.arrayLubrificante[i] = this.infoSaw[i].lubrificante;
          this.arrayPotenza[i] = this.infoSaw[i].potenza;

          this.arrayLabels[i] = this.infoSaw[i].timestamp;
        }

      }

      this.chart.data.labels = this.arrayLabels;
      this.chart.update();

    }, 5000); // Esegui ogni 5 secondi (5000 millisecondi)
  }

  stopPolling() {
    clearInterval(this.intervalId);
  }

  onClick(){
    this.slice = this.selectedSlice;

    this.stopPolling();

    this.createChart();

  }


}
