import { Injectable } from '@angular/core';
import {Saw} from "../models/saw";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class SawService {

  constructor(private http:HttpClient, private router: Router) {

  }

  async getAll()  : Promise<Saw[]|null> {
    const apiUrl = 'http://localhost:8080/api/info/saws/'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const saws: Saw[] = response.data;
      return saws;

    } catch (error) {
      return null;
    }
  }

  async getById(machine: string)  : Promise<Saw[]|null> {
    const apiUrl = 'http://localhost:8080/api/info/saws/' + machine

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const saws: Saw[] = response.data;
      return saws;

    } catch (error) {
      return null;
    }
  }


  async getLast()  : Promise<Saw|null> {
    const apiUrl = 'http://localhost:8080/api/info/saws/last'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const saw: Saw = response.data;
      return saw;

    } catch (error) {
      return null;
    }
  }

  async getLastById(id: string)  : Promise<Saw|null> {
    const apiUrl = 'http://localhost:8080/api/info/saws/last/' + id;

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const saw: Saw = response.data;
      return saw;

    } catch (error) {
      return null;
    }
  }



}
