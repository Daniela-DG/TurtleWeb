import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Sugerencia} from '../Models/Sugerencia'
@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  apiURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient

  ) { }
  create(fromData){
    return this.http.post<Sugerencia>('${this.apiURL}/Sugerencias/create',fromData)

  }

}
