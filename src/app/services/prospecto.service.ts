import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Prospecto} from '../interfaces/prospecto';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  private api = "http://localhost:3000";

  constructor(private http:HttpClient) { 

  }

  getAllProspectos(){
    const path = `${this.api}/prospectos`;
    return this.http.get<Prospecto[]>(path).toPromise();
  }

  async getProspecto(id:string)  {
    const path = `${this.api}/prospectos/${id}`;
    return await this.http.get<Prospecto>(path).toPromise();

  }
  public createProspecto(prospecto:any){
    const path = `${this.api}/prospectos/add`;
    return this.http.post(path, prospecto).toPromise();
  }
  // updateProspecto(prospecto: Prospecto){
  //   const path = `${this.api}/prospectos/${prospecto.id}`;
  //   return this.http.put<Prospecto>(path, prospecto);

  // }
  updateProspecto(prospecto: Partial<Prospecto>){
    const path = `${this.api}/prospectos/${prospecto.id}`;
    return this.http.patch<Prospecto>(path, prospecto);

  }

  
}
