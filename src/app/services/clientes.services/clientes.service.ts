import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from '../../models/clientes.model/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient){

  }
  getClientes(){
    return this.http.get<ClienteModel[]>('clientes.json'); 
  }
}
