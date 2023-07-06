import { Component } from '@angular/core';
import {SawService} from "../../services/saw.service";
import {Chart} from "chart.js";
import {Lathe} from "../../models/lathe";
import {LatheService} from "../../services/lathe.service";

@Component({
  selector: 'app-lathe-chart',
  templateUrl: './lathe-chart.component.html',
  styleUrls: ['./lathe-chart.component.scss']
})
export class LatheChartComponent {

  public chart: any;

  intervalId: any;

  infoLathe: Lathe[] | undefined = [];

  arrayAllineamento: number[] = [];
  arrayVibrazioni: number[] = [];
  arrayRotazione: number[] = [];
  arrayLubrificante: number[] = [];
  arrayPotenza: number[] = [];

  arrayLabels: string[] = [];

  slice: number = 10;
  selectedSlice: number = 10;

  nSlices: number[] = [10, 20, 30];

  constructor(private latheService:LatheService) { }

  async ngOnInit() {

    this.createChart();

  }

  ngOnDestroy() {
    this.stopPolling();
  }

  async createChart(){

    this.arrayLabels = [];

    // @ts-ignore
    this.infoLathe = await this.latheService.getById(localStorage.getItem('searched'));

    this.infoLathe = this.infoLathe?.slice(-this.slice)

    if (this.infoLathe != null) {

      for (let i = 0; i < this.infoLathe.length; i++) {
        this.arrayAllineamento[i] = this.infoLathe[i].allineamento * 100;
        this.arrayVibrazioni[i] = this.infoLathe[i].vibrazioni;
        this.arrayRotazione[i] = this.infoLathe[i].rotazione / 1000;
        this.arrayLubrificante[i] = this.infoLathe[i].lubrificante;
        this.arrayPotenza[i] = this.infoLathe[i].potenza / 1000;

        this.arrayLabels[i] = this.infoLathe[i].timestamp;
      }

    }

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.arrayLabels,
        datasets: [
          {
            label: "Allineamento tornio [2,5-5 dm]",
            data: this.arrayAllineamento,
            backgroundColor: 'limegreen',
            borderColor: 'limegreen',
            fill: false
          },
          {
            label: "Vibrazioni [0.1-0,2 mm/s]",
            data: this.arrayVibrazioni,
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          },
          {
            label: "Velocità di rotazione [1,5-1.6 k-giri/minuto]",
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
            label: "Potenza [7/7.5 kW]",
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
      this.infoLathe = await this.latheService.getById(localStorage.getItem('searched'));

      this.infoLathe = this.infoLathe?.slice(-this.slice)

      if (this.infoLathe != null) {

        for (let i = 0; i < this.infoLathe.length; i++) {
          this.arrayAllineamento[i] = this.infoLathe[i].allineamento * 100;
          this.arrayVibrazioni[i] = this.infoLathe[i].vibrazioni;
          this.arrayRotazione[i] = this.infoLathe[i].rotazione / 1000;
          this.arrayLubrificante[i] = this.infoLathe[i].lubrificante;
          this.arrayPotenza[i] = this.infoLathe[i].potenza / 1000;

          this.arrayLabels[i] = this.infoLathe[i].timestamp;
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
