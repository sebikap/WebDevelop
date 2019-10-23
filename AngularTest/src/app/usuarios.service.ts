import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getUsuarios() {
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    return this.http.get('http://localhost:3000/usuarios', { headers: headersClient });
  }

  createUsuario(mail, pass) {
    console.log("Create Usuario")
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    return this.http.post('http://localhost:3000/usuarios/agregar', {
      headers: headersClient,
      email: mail,
      password: pass
    })
  }
}