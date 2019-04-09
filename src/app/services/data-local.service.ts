import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/movies';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
    ) { }

  guardarPelicula(pelicula: PeliculaDetalle): boolean {
    const existe = this.peliculas.find(peli => peli.id === pelicula.id);
    if (!existe) {
      this.peliculas.push(pelicula);
      this.storage.set('peliculas', this.peliculas);
      this.presentToast('Pelicula agregada a favoritos.');
      return true;
    } else {
      this.presentToast('La pelicula ya existe en favoritos.');
      return false;
    }
  }

  async cargarPeliculas() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existepelicula(id) {
    id = Number(id);
    await this.cargarPeliculas();
    const existe = this.peliculas.find(peli => peli.id === id);

    return (existe) ? true : false;
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
