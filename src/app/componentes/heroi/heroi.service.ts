import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroi } from './heroi.model';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {
  private urlBase = "https://localhost:44303"
  constructor(private httpClient:HttpClient) {}
  listar():Observable<Heroi[]>{
    return this.httpClient.get<Heroi[]>(`${this.urlBase}/heroi/todos`);
  }
  cadastrar(heroi:Heroi):Observable<Heroi>{
    console.log(heroi)
    return this.httpClient.post<Heroi>(`${this.urlBase}/heroi/cadastrar`, heroi);
  }
  buscaPorId(id:string):Observable<Heroi>{
    return this.httpClient.get<Heroi>(`${this.urlBase}/heroi/?id=${id}`);
  }
  atualizar(heroi:Heroi):Observable<Heroi>{
    return this.httpClient.put<Heroi>(`${this.urlBase}/heroi/editar`,heroi);
  }
  remover(heroi:Heroi):Observable<{}>{
    return this.httpClient.delete<Heroi>(`${this.urlBase}/heroi/remover/?id=${heroi.id}`);
  }
  buscarSuperPoderes():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.urlBase}/superpoder/todos`);
  }
}
