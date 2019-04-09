import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle, Genre, PelisPerGenre } from '../interfaces/movies';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  pelisPorGenero: PelisPerGenre[] = [];

  constructor(
    public dataLocal: DataLocalService,
    private dataMovies: MoviesService
    ) {}

  ngOnInit() {
    console.log('favoritos');
    this.dataLocal.cargarPeliculas();
    this.dataMovies.getGeneros()
      .subscribe(resp => {
        this.generos = resp.genres;
      });
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    console.log('holaa');
  }

}
