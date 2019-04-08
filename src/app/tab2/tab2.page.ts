import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/movies';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../components/detalles/detalles.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] = ['Avenger', 'Mujer maravilla', 'Hull', 'Capitan América'];
  peliculas: Pelicula[] = [];
  buscando = false;
  detallePelicula: object = {};

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController
    ) {}


  buscar(event) {
    const valor = event.detail.value;
    if (valor) {
      this.buscando = true;
      this.movieService.buscarPelicula(valor)
        .subscribe(resp => {
          this.peliculas = resp['results'];
          this.buscando = false;
        });
    }
  }

  detalles(id: string) {
    this.movieService.getDetallePeli(id)
      .subscribe(resp => {
         this.verDetalles(id);
      });
  }

  async verDetalles(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
