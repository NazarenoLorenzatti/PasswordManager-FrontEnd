import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  actualizarUsuario(body: any){
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const endpoint = `${base_url}/actualizar-usuario`;
    return this.http.put(endpoint, body, { headers });
  }

  
}
