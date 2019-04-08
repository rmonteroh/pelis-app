import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/movies';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-posters',
  templateUrl: './slideshow-posters.component.html',
  styleUrls: ['./slideshow-posters.component.scss'],
})
export class SlideshowPostersComponent implements OnInit {
@Input() peliculas: Pelicula[] = [];
slidesOpt = {
  slidesPerView: 3.3,
  freeMode: true
};
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

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
