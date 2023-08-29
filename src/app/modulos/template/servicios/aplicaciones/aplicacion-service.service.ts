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
    const endpoint = `${base_url}/buscar-aplicacion/${id}`;
    return this.http.get(endpoint);
  }

  getAplicaciones(){
    const endpoint = `${base_url}/listar-aplicaciones`;
    return this.http.get(endpoint);
  }

  saveAplicacion(body: any){
    const endpoint = `${base_url}/guardar-aplicacion`;
    return this.http.post(endpoint, body);
  }
  
  editarAplicacion(body: any){
    const endpoint = `${base_url}/editar-aplicacion`;
    return this.http.put(endpoint, body);
  }

  eliminarAplicacion(id:number){          
    const endpoint = `${base_url}/eliminar-aplicacion/${id}`;
    return this.http.delete(endpoint);
  }

}
