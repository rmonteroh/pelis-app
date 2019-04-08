import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast } from 'src/app/interfaces/movies';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
@Input() id;
pelicula: object = {};
oculto = 150;
actores: Cast[] = [];
slidesOpt = {
  slidesPerView: 3.3,
  freeMode: true
};

  constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getDetallePeli(this.id)
      .subscribe(resp => {
        this.pelicula = resp;
        console.log('detalles', resp);
      });
    this.movieService.getActoresPeli(this.id)
      .subscribe(resp => {
        this.actores = resp.cast;
        console.log('actores', resp);
      });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
