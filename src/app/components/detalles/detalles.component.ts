import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast } from 'src/app/interfaces/movies';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

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
existe = false;

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
    ) { }

  async ngOnInit() {
     this.existe = await this.dataLocal.existepelicula(this.id);
    this.movieService.getDetallePeli(this.id)
    .subscribe(resp => {
      this.pelicula = resp;
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
  favorito() {
    const done = this.dataLocal.guardarPelicula(this.pelicula);
    if (done) {
      this.existe = true;
    }
  }

}
