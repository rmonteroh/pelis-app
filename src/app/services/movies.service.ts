import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PeliculaDB, PeliculaDetalle, ActoresDetalle, Genre } from '../interfaces/movies';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private popularesPage = 0;
  constructor(private http: HttpClient) { }

  private makeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    console.log(query);
    return this.http.get<T>(query);
  }

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

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.makeQuery<PeliculaDB>(query);
  }

  // El parametro a=1 la api no le va a hacer caso, solo esta puesto para q la url tenga el
  // simbolo de ? y concatene las demas parametros con el simbolo &.
  getDetallePeli(id: string) {
    const query = `/movie/${id}?a=1`;
    return this.makeQuery<PeliculaDetalle>(query);
  }

  getActoresPeli(id: string) {
    const query = `/movie/${id}/credits?a=1`;
    return this.makeQuery<ActoresDetalle>(query);
  }

  buscarPelicula(name: string) {
    const query = `/search/movie?query=${name}`;
    return this.makeQuery<PeliculaDetalle>(query);
  }

  getGeneros() {
    const query = `/genre/movie/list?a=1`;
    return this.makeQuery<Genre[]>(query);
  }

}
