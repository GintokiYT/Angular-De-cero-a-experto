import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponsive } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'YVsAVMdz3jb5YJO9UBrtn3pxcMAGcpfd';
  private historial: string[] = [];

  public resultados: Gif[] = [];

  get getHistorial() {
    return [...this.historial];
  }

  constructor( private http: HttpClient ) {

    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs(query: string) {
    if(query.trim().length === 0) return;
    if(this.historial.map(e => e.toLowerCase()).includes(query.toLowerCase()) !== true) {
      this.historial.unshift(query);

      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    console.log(params.toString());

    this.http.get<SearchGifsResponsive>(`${this.servicioUrl}/search`, {
      params: params
    })
    .subscribe( response => {
      console.log(response.data)
      this.resultados = response.data;

      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
  }
}
