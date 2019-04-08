import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/movies';
import { DetallesComponent } from '../detalles/detalles.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() cargarmas = new EventEmitter();

  slidesOpt = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cargarMas() {
    console.log('mas');
    this.cargarmas.emit();
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
