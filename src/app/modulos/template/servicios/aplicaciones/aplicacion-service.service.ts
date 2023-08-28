import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/aplicacion"

@Injectable({
  providedIn: 'root'
})

export class AplicacionService {

  private http = inject(HttpClient);

  constructor() { }

  getAplicaciones(){
    const endpoint = `${base_url}/listar-aplicaciones`;
    return this.http.get(endpoint);
  }

  saveAplicacion(body: any){
    const endpoint = `${base_url}/guardar-aplicacion`;
    return this.http.post(endpoint, body);
  }

}
