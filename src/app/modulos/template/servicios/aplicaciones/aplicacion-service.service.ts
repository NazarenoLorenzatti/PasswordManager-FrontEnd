import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/aplicacion"

@Injectable({
  providedIn: 'root'
})

export class AplicacionService {

  public idApp!: number;
  public nombreAplicacion!: string;
  public urlApp!: string;

  private http = inject(HttpClient);

  constructor() { }

  buscarAplicacion(id:number){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/buscar-aplicacion/${id}`;
    return this.http.get(endpoint, { headers });
  }

  getAplicaciones(){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/listar-aplicaciones`;
    return this.http.get(endpoint, { headers });
  }

  saveAplicacion(body: any, username: string){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/guardar-aplicacion/${username}`;
    return this.http.post(endpoint, body, { headers });
  }
  
  editarAplicacion(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/editar-aplicacion`;
    return this.http.put(endpoint, body, { headers });
  }

  eliminarAplicacion(id:number){     
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };     
    const endpoint = `${base_url}/eliminar-aplicacion/${id}`;
    return this.http.delete(endpoint, { headers });
  }

}
