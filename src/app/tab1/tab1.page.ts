import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { PeliculaDB, Pelicula } from '../interfaces/movies';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
  imgURI: string = environment.imgUrl;



  constructor( private serviceMovie: MoviesService) {}

  ngOnInit(): void {
    this.serviceMovie.getFeatures()
    .subscribe( (resp: PeliculaDB) => {
      this.peliculasRecientes.push( ...resp.results);
    });

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

 async getPopulares() {
    await this.serviceMovie.getPopulares()
      .subscribe(resp => {
        const tempArray = [...this.populares, ...resp.results];
        this.populares = tempArray;
      });
  }

}
