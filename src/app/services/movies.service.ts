import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PeliculaDB } from '../interfaces/movies';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  // Url completa de la api moviedb
  // tslint:disable-next-line:max-line-length
  // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-30&language=es&include_image_language=es&api_key=ab447e64065a4c8a7a826a62eb951942
  getFeatures() {
    const hoy = new Date();
    // A date  se le pasa el año, el mes actual mas 1 para obtener el proximo mes y el 0 indica el ultimo dia del mes anterior.
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth();
    let mesString;

    if (mes < 10) {
      mesString = '0'+ mes;
    } else {
      mesString = mes;
    }

    const inicio  = `${hoy.getFullYear()}-${mesString}-01`;
    const fin     = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.makeQuery<PeliculaDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  private makeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }
}
