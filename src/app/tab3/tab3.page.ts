import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle, Genre, PelisPerGenre } from '../interfaces/movies';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  pelisPorGenero: PelisPerGenre[] = [];

  constructor(
    public dataLocal: DataLocalService,
    private dataMovies: MoviesService
    ) {}

    // Ciclo de vida de los componentes en ionic, se ejecuta cada ves k entras al componente.
  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarPeliculas();
    this.generos = await this.dataMovies.getGeneros();
    console.log(this.generos);
    this.peliculasPorGenero(this.generos, this.peliculas);
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    generos.forEach(genero => {
      this.pelisPorGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(pelis => {
          return pelis.genres.find(genre => genre.id === genero.id);
        })
      });
    });
    console.log('detalles', this.pelisPorGenero);
  }

}
