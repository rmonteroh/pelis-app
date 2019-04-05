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
  imgURI: string = environment.imgUrl;



  constructor( private serviceMovie: MoviesService) {}

  ngOnInit(): void {
    this.serviceMovie.getFeatures()
    .subscribe( (resp: PeliculaDB) => {
      this.peliculasRecientes.push( ...resp.results);
      console.log(this.peliculasRecientes);
    });
  }

  makeUrlPath(base: string, final: string) {
    return `${base}${final}`;
  }

}
