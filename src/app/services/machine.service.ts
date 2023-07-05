import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Saw} from "../models/saw";
import axios from "axios";
import {Machine} from "../models/machine";

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http:HttpClient) {

  }

  async getAll()  : Promise<Machine[]|null> {
    const apiUrl = 'http://localhost:8080/api/machines/'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const machines: Machine[] = response.data;
      return machines;

    } catch (error) {
      return null;
    }
  }

  async getByIdMacchinario(name: string)  : Promise<Machine|null> {
    const apiUrl = 'http://localhost:8080/api/machines/find/' + name;

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const machine: Machine = response.data;
      return machine;

    } catch (error) {
      return null;
    }
  }


}
