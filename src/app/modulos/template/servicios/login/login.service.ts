import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  primerFactor(body: any){
    const endpoint = `${base_url}/primer-factor`;
    return this.http.post(endpoint, body);
  }

  segundoFactor(body: any){
    const endpoint = `${base_url}/login`;
    return this.http.post(endpoint, body);
  }

}
