import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { equipoDTO, equiposCreacionDTO } from './equipos';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'productos';
  public obtenerTodos(): Observable<equipoDTO[]>{
    return this.http.get<equipoDTO[]>(this.apiURL)
  }
  public crear(equipo: equiposCreacionDTO){
    return this.http.post(this.apiURL, equipo);
  }
}
