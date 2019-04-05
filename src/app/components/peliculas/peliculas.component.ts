import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {
@Input() peliculasRecientes: Pelicula[];

  slidesOpt = {
    slidesPerView: 1.1,
    freeMode: true
  };
  constructor() { }

  ngOnInit() {}

}
