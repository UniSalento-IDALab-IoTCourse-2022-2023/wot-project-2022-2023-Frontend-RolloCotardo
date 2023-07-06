import { Injectable } from '@angular/core';
import {Saw} from "../models/saw";
import axios from "axios";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Lathe} from "../models/lathe";

@Injectable({
  providedIn: 'root'
})
export class LatheService {

  constructor(private http:HttpClient, private router: Router) { }

  async getAll()  : Promise<Lathe[]|null> {
    const apiUrl = 'http://localhost:8080/api/info/lathes/'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const lathes: Lathe[] = response.data;
      return lathes;

    } catch (error) {
      return null;
    }
  }

  async getById(machine: string)  : Promise<Lathe[]|null> {
    const apiUrl = 'http://localhost:8080/api/info/lathes/' + machine

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const lathes: Lathe[] = response.data;
      return lathes;

    } catch (error) {
      return null;
    }
  }


  async getLast()  : Promise<Lathe|null> {
    const apiUrl = 'http://localhost:8080/api/info/lathes/last'

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const lathe: Lathe = response.data;
      return lathe;

    } catch (error) {
      return null;
    }
  }


  async getLastById(id: string)  : Promise<Lathe|null> {
    const apiUrl = 'http://localhost:8080/api/info/lathes/last/' + id;

    try {
      var token = JSON.parse(localStorage.getItem('token')!)
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer `+token.jwt,
        },
      });
      const lathe: Lathe = response.data;
      return lathe;

    } catch (error) {
      return null;
    }
  }
}
