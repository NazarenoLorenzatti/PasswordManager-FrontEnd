import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/aplicacion"

@Injectable({
  providedIn: 'root'
})

export class AplicacionService {

  constructor(private http: HttpClient) { }

  getAplicaciones(){
    const endpoint = `${base_url}/listar-aplicaciones`;
    return this.http.get(endpoint);
  }

}
